# Generated by Django 3.2.3 on 2021-07-10 23:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beats', '__first__'),
        ('artists', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Producer',
            new_name='Artist',
        ),
        migrations.AddField(
            model_name='sociallink',
            name='url',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='sociallink',
            name='username',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]