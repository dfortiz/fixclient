from rest_framework import serializers
from .models import Customer, QuoteOrder

class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = ('pk','first_name', 'last_name', 'email', 'phone','address','fixserver','description')

class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuoteOrder
        fields = ('asset_type', 'trading_pair1','trading_pair2', 'live_chart', 'config_file')
