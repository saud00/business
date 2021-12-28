import graphene
import app.schema
import user.schema


class Query(user.schema.Query, app.schema.Query, graphene.ObjectType):
    pass


class Mutation(user.schema.Mutation, app.schema.Mutation, graphene.ObjectType, ):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
