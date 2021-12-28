from django.contrib import admin
from .models import sizes
from .models import color
from .models import shoes
from .models import product
from .models import apparel

# Register your models here.

admin.site.register(sizes)
admin.site.register(color)
admin.site.register(shoes)
admin.site.register(product)
admin.site.register(apparel)
