import jwt from "jsonwebtoken";
import _ from "lodash";
import bcrypt from "bcrypt";

export const createTokens = async (user, secret, secret2) => {
  console.log("user", user);
  const createToken = jwt.sign(
    {
      user: _.pick(user, ["id", "username", "email", "password"])
    },
    secret,
    {
      expiresIn: "1h"
    }
  );

  const createRefreshToken = jwt.sign(
    {
      user: _.pick(user, "id")
    },
    secret2,
    {
      expiresIn: "7d"
    }
  );

  return [createToken, createRefreshToken];
};

export const refreshTokens = async (token, refreshToken, models, SECRET) => {
  let userId = -1;
  try {
    const {
      user: { id }
    } = jwt.decode(refreshToken);
    userId = id;
  } catch (err) {
    return {};
  }

  if (!userId) {
    return {};
  }

  const user = await models.User.findOne({ where: { id: userId }, raw: true });

  if (!user) {
    return {};
  }

  try {
    jwt.verify(refreshToken, user.refreshSecret);
  } catch (err) {
    return {};
  }

  const [newToken, newRefreshToken] = await createTokens(
    user,
    SECRET,
    user.refreshSecret
  );
  return {
    token: newToken,
    refreshToken: newRefreshToken,
    user
  };
};

export const tryLogin = async (username, password, models, SECRET, SECRET2) => {
  console.log("tryLogin");
  const user = await models.admin.findOne({ where: { username }, raw: true });
  if (!user) {
    // user with provided email not found
    return {
      ok: false,
      errors: [
        {
          path: "username",
          message: "No existe ningún administrador con tal usuario"
        }
      ]
    };
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    // bad password
    return {
      ok: false,
      errors: [{ path: "password", message: "La contraseña no es correcta" }]
    };
  }

  const refreshTokenSecret = user.password + SECRET2;

  const [token, refreshToken] = await createTokens(
    user,
    SECRET,
    refreshTokenSecret
  );

  const result = {
    ok: true,
    token,
    refreshToken
  };

  console.log("result", result);

  return result;
};
