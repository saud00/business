import graphene
from graphene_django import DjangoObjectType
from .models import shoes, product, sizes, color
from user.schema import UserType
from django.db.models import Q


class productType(DjangoObjectType):
    class Meta:
        model = product


class shoesType(DjangoObjectType):
    class Meta:
        model = shoes


class SizeType(DjangoObjectType):
    class Meta:
        model = sizes


class colorType(DjangoObjectType):
    class Meta:
        model = color


# Query starts here//////////////////////////////////////


class Query(graphene.ObjectType):

    products = graphene.List(productType)

    def resolve_products(self, info, **kwargs):
        return product.objects.all()

    searches = graphene.List(productType, search=graphene.String())

    def resolve_searches(self, info, search=None, **kwargs):
        if search:
            filter = (
                Q(name__icontains=search)
            )
            return product.objects.filter(filter)
        return product.objects.all()

    Eproduct = graphene.List(productType)

    def resolve_Eproduct(self, info, **kwargs):
        return product.objects.all()


# Mutation starts here /////////////////////////////////////////

class Createshoes(graphene.Mutation):
    shoes = graphene.Field(shoesType)
    id = graphene.Int()
    name = graphene.String()
    Size = graphene.Field(SizeType)
    Color = graphene.Field(colorType)
    posted_by = graphene.Field(UserType)

    class Arguments:
        name = graphene.String()
        Size = graphene.String()
        Color = graphene.String()
        gender = graphene.String()

    def mutate(self, info, name, Size, Color, gender):
        user = info.context.user or None
        shoes = shoes(
            Color=Color,
            gender=gender,
            name=name,
            Size=Size,
            posted_by=user
        )
        shoes.save()

        return Createshoes(
            id=shoes.id,
            name=shoes.name,
            Size=shoes.Size,
            gender=shoes.gender,
            Color=shoes.Color,
            posted_by=shoes.posted_by
        )


# /////////////////////////////////////////////////////////////////

class Createproduct(graphene.Mutation):
    prd = graphene.Field(productType)

    product = graphene.String()
    id = graphene.Int()

    class Arguments:
        product = graphene.String()
        id = graphene.Int()

    def mutate(self, info, product):
        prd = product(product=product)
        prd.save()

        return Createproduct(
            product=prd.product,
        )


# ////////////////////////////////////////////////////////////////////////////////

class Updateshoes(graphene.Mutation):
    update = graphene.Field(shoesType)

    class Arguments:
        id = graphene.Int(required=True)
        name = graphene.String()
        Size = graphene.String()

    def mutate(self, info, id, name, Size):
        user = info.context.user
        update = shoes.objects.get(id=id)

        if update.posted_by != user:
            raise Exception("Wrong user")

        update.name = name,
        update.Size = Size,
        update.save()

        return Updateshoes(update=update)


# //////////////////////////////////////////////////////////////////////////////////


class Deleteshoes(graphene.Mutation):
    id = graphene.Int()

    class Arguments:
        id = graphene.Int(required=True)

    def mutate(self, info, id, Size):
        user = info.context.user
        shoes = shoes.objects.get(id=id)

        if shoes.posted_by != user:
            raise Exception("wrong user")

        shoes.delete()

        return Deleteshoes(Size=Size)


# ///////////////////////////////////////////////////////////////////////////////


class Mutation(graphene.ObjectType):
    create_product = Createproduct.Field()
    create_shoes = Createshoes.Field()
    update_shoes = Updateshoes.Field()
    delete_shoes = Deleteshoes.Field()
