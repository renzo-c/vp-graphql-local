This is a GraphQL server for vpproject.

Just run it with:

npm install
npm start

graphiql: http://localhost:4000/graphql

query for test on graphiql:

{
employee(userName: "jreyp") {
id
firstName
lastName
shifts {
id
date
begin
end
branch {
branchName
address
}
}
}
}
