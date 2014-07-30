# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Remove `managed = False` lines if you wish to allow Django to create and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin.py sqlcustom [appname]'
# into your database.
from __future__ import unicode_literals

from django.db import models

class Ads(models.Model):
    id = models.IntegerField(primary_key=True)
    display = models.TextField(blank=True) # This field type is a guess.
    seq = models.IntegerField()
    title = models.CharField(max_length=64, blank=True)
    desc = models.CharField(max_length=256, blank=True)
    image = models.CharField(max_length=64, blank=True)
    url = models.CharField(max_length=256, blank=True)
    class Meta:
        managed = False
        db_table = 'ads'

class Categories(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    slug = models.CharField(unique=True, max_length=50)
    parent = models.ForeignKey('self', blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'categories'

class Comments(models.Model):
    id = models.IntegerField(primary_key=True)
    media = models.ForeignKey('Media', blank=True, null=True)
    subject = models.CharField(max_length=100, blank=True)
    created_on = models.DateTimeField()
    modified_on = models.DateTimeField()
    reviewed = models.IntegerField()
    publishable = models.IntegerField()
    author_name = models.CharField(max_length=50)
    author_email = models.CharField(max_length=255, blank=True)
    author_ip = models.BigIntegerField()
    body = models.TextField()
    class Meta:
        managed = False
        db_table = 'comments'

class Departments(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=64)
    create_date = models.DateTimeField()
    block = models.TextField() # This field type is a guess.
    application = models.TextField() # This field type is a guess.
    desc = models.CharField(max_length=512)
    block_date = models.DateTimeField()
    application_date = models.DateTimeField()
    app_admin = models.CharField(max_length=32, blank=True)
    app_email = models.CharField(max_length=45, blank=True)
    app_mobile = models.CharField(max_length=32, blank=True)
    avatar = models.CharField(max_length=64, blank=True)
    block_reason = models.CharField(max_length=512, blank=True)
    class Meta:
        managed = False
        db_table = 'departments'

class Groups(models.Model):
    group_id = models.IntegerField(primary_key=True)
    group_name = models.CharField(unique=True, max_length=255)
    display_name = models.CharField(max_length=255, blank=True)
    created = models.DateTimeField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'groups'

class GroupsPermissions(models.Model):
    id = models.IntegerField(primary_key=True)
    group_id = models.IntegerField()
    permission_id = models.IntegerField()
    class Meta:
        managed = False
        db_table = 'groups_permissions'

class Media(models.Model):
    id = models.IntegerField(primary_key=True)
    type = models.CharField(max_length=8, blank=True)
    slug = models.CharField(unique=True, max_length=50)
    podcast = models.ForeignKey('Podcasts', blank=True, null=True)
    reviewed = models.IntegerField()
    encoded = models.IntegerField()
    publishable = models.IntegerField()
    created_on = models.DateTimeField()
    modified_on = models.DateTimeField()
    publish_on = models.DateTimeField(blank=True, null=True)
    publish_until = models.DateTimeField(blank=True, null=True)
    title = models.CharField(max_length=255)
    super_status = models.IntegerField()
    subtitle = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    description_plain = models.TextField(blank=True)
    notes = models.TextField(blank=True)
    duration = models.IntegerField()
    views = models.IntegerField()
    likes = models.IntegerField()
    dislikes = models.IntegerField()
    popularity_points = models.IntegerField()
    popularity_likes = models.IntegerField()
    popularity_dislikes = models.IntegerField()
    author_name = models.CharField(max_length=50)
    author_email = models.CharField(max_length=255)
    dep_id = models.IntegerField()
    zhaiyao = models.CharField(max_length=64, blank=True)
    mima = models.CharField(max_length=64, blank=True)
    user_id = models.IntegerField(blank=True, null=True)
    refuse_reason = models.CharField(max_length=128, blank=True)
    class Meta:
        managed = False
        db_table = 'media'

class MediaCategories(models.Model):
    media = models.ForeignKey(Media)
    category = models.ForeignKey(Categories)
    class Meta:
        managed = False
        db_table = 'media_categories'

class MediaFiles(models.Model):
    id = models.IntegerField(primary_key=True)
    media = models.ForeignKey(Media)
    storage = models.ForeignKey('Storage')
    type = models.CharField(max_length=16)
    container = models.CharField(max_length=10, blank=True)
    display_name = models.CharField(max_length=255)
    unique_id = models.CharField(max_length=255, blank=True)
    size = models.IntegerField(blank=True, null=True)
    created_on = models.DateTimeField()
    modified_on = models.DateTimeField()
    bitrate = models.IntegerField(blank=True, null=True)
    width = models.IntegerField(blank=True, null=True)
    height = models.IntegerField(blank=True, null=True)
    quality = models.CharField(max_length=16, blank=True)
    encoded = models.TextField(blank=True) # This field type is a guess.
    class Meta:
        managed = False
        db_table = 'media_files'

class MediaFilesMeta(models.Model):
    id = models.IntegerField(primary_key=True)
    media_files = models.ForeignKey(MediaFiles)
    key = models.CharField(max_length=64)
    value = models.TextField(blank=True)
    class Meta:
        managed = False
        db_table = 'media_files_meta'

class MediaFulltext(models.Model):
    media_id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255, blank=True)
    description_plain = models.TextField(blank=True)
    notes = models.TextField(blank=True)
    author_name = models.CharField(max_length=50)
    tags = models.TextField(blank=True)
    categories = models.TextField(blank=True)
    class Meta:
        managed = False
        db_table = 'media_fulltext'

class MediaMeta(models.Model):
    id = models.IntegerField(primary_key=True)
    media = models.ForeignKey(Media)
    key = models.CharField(max_length=64)
    value = models.TextField(blank=True)
    class Meta:
        managed = False
        db_table = 'media_meta'

class MediaTags(models.Model):
    media = models.ForeignKey(Media)
    tag = models.ForeignKey('Tags')
    class Meta:
        managed = False
        db_table = 'media_tags'

class MigrateVersion(models.Model):
    repository_id = models.CharField(primary_key=True, max_length=250)
    repository_path = models.TextField(blank=True)
    version = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'migrate_version'

class Permissions(models.Model):
    permission_id = models.IntegerField(primary_key=True)
    permission_name = models.CharField(unique=True, max_length=16)
    description = models.CharField(max_length=255, blank=True)
    class Meta:
        managed = False
        db_table = 'permissions'

class Players(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)
    enabled = models.IntegerField()
    priority = models.IntegerField()
    created_on = models.DateTimeField()
    modified_on = models.DateTimeField()
    data = models.TextField()
    class Meta:
        managed = False
        db_table = 'players'

class Podcasts(models.Model):
    id = models.IntegerField(primary_key=True)
    slug = models.CharField(unique=True, max_length=50)
    created_on = models.DateTimeField()
    modified_on = models.DateTimeField()
    title = models.CharField(max_length=50)
    subtitle = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=50, blank=True)
    author_name = models.CharField(max_length=50)
    author_email = models.CharField(max_length=50)
    explicit = models.IntegerField(blank=True, null=True)
    copyright = models.CharField(max_length=50, blank=True)
    itunes_url = models.CharField(max_length=80, blank=True)
    feedburner_url = models.CharField(max_length=80, blank=True)
    class Meta:
        managed = False
        db_table = 'podcasts'

class Settings(models.Model):
    id = models.IntegerField(primary_key=True)
    key = models.CharField(unique=True, max_length=255)
    value = models.TextField(blank=True)
    class Meta:
        managed = False
        db_table = 'settings'

class SettingsMulti(models.Model):
    id = models.IntegerField(primary_key=True)
    key = models.CharField(max_length=255)
    value = models.TextField()
    class Meta:
        managed = False
        db_table = 'settings_multi'

class Storage(models.Model):
    id = models.IntegerField(primary_key=True)
    engine_type = models.CharField(max_length=30)
    display_name = models.CharField(unique=True, max_length=100)
    enabled = models.IntegerField()
    created_on = models.DateTimeField()
    modified_on = models.DateTimeField()
    data = models.TextField()
    class Meta:
        managed = False
        db_table = 'storage'

class Tags(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(unique=True, max_length=50)
    slug = models.CharField(unique=True, max_length=50)
    class Meta:
        managed = False
        db_table = 'tags'

class Users(models.Model):
    user_id = models.IntegerField(primary_key=True)
    user_name = models.CharField(unique=True, max_length=16)
    email_address = models.CharField(unique=True, max_length=255)
    display_name = models.CharField(max_length=255, blank=True)
    password = models.CharField(max_length=80, blank=True)
    created = models.DateTimeField(blank=True, null=True)
    user_type = models.CharField(max_length=45, blank=True)
    dep = models.ForeignKey(Departments)
    last_login_time = models.DateTimeField(blank=True, null=True)
    phone_number = models.CharField(max_length=16)
    class Meta:
        managed = False
        db_table = 'users'

class UsersGroups(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(Users, blank=True, null=True)
    group = models.ForeignKey(Groups, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'users_groups'

class UsersLog(models.Model):
    id = models.IntegerField(primary_key=True)
    user_id = models.IntegerField()
    date = models.DateField()
    class Meta:
        managed = False
        db_table = 'users_log'

class UsersPermissions(models.Model):
    id = models.IntegerField(primary_key=True)
    user_id = models.IntegerField(blank=True, null=True)
    permission_id = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'users_permissions'

