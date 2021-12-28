from django.db import models

# Create your models here.

from django.db import models
from django.db.models.base import Model
from django.db.models.deletion import CASCADE


Size_Choices = ((u'1', u'07'), (u'2', u'08'), (u'3', u'09'), (u'4', u'10'),)


class sizes(models.Model):
    size = models.CharField(max_length=1, choices=Size_Choices)

    def __str__(self):
        return self.size


Color_Choices = ((u'1', u'grey'), (u'2', u'black'),
                 (u'3', u'yellow'), (u'4', u'blue'),)


class color(models.Model):
    colour = models.CharField(max_length=1, choices=Color_Choices)

    def __str__(self):
        return self.colour


class shoes(models.Model):
    name = models.CharField(max_length=15)
    Size = models.ForeignKey(sizes, related_name="Size",
                             on_delete=models.CASCADE)
    Color = models.ForeignKey(
        color, related_name="Color", on_delete=models.CASCADE)
    gender = models.CharField(max_length=15)

    def __str__(self):
        return self.name


class apparel(models.Model):
    name = models.CharField(max_length=15)
    size = models.IntegerField()
    color = models.CharField(max_length=15)
    gender = models.CharField(max_length=15)

    def __str__(self):
        return self.name


Category_choices = (('1', 'Men'), ('2', 'Women'))


class product(models.Model):
    Name = models.CharField(max_length=15, blank=False)
    price = models.IntegerField()
    category = models.CharField(max_length=15, choices=Category_choices)

    def __str__(self):
        return self.Name


class users(models.Model):
    firstName = models.CharField(max_length=15, blank=False)
    lastName = models.CharField(max_length=15, blank=False)
    email = models.EmailField(max_length=15, blank=False)
    password = models.CharField(max_length=15, blank=False)

    def __str__(self):
        return self.firstName
