from django.db import models

# Create your models here.


class Customer(models.Model):
    first_name  = models.CharField("First name", max_length=255)
    last_name   = models.CharField("Last name", max_length=255)
    email       = models.EmailField()
    phone       = models.CharField(max_length=20)
    address     = models.TextField(blank=True, null=True)
    fixserver   = models.TextField(blank=True,null=True)
    description = models.TextField(blank=True, null=True)
    createdAt   = models.DateTimeField("Created At", auto_now_add=True)

    def __str__(self):
        return self.first_name

class QuoteOrder(models.Model):
    asset_type = models.TextField("Asset Type")
    trading_pair1 = models.TextField(blank=True,null=True, max_length=3)
    trading_pair2 = models.TextField(blank=True,null=True, max_length=3)
    live_chart    = models.BooleanField(default=True)
    config_file   = models.TextField(blank=True,null=True)

    def __str__(self):
        return f"{self.trading_pair1}/{self.trading_pair2}"
