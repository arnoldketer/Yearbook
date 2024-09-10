# Build React and then serve via Django
web: cd frontend_yearbook && npm install && npm run build && cd ../yearbook && python manage.py migrate && python manage.py collectstatic --noinput && python manage.py runserver 0.0.0.0:$PORT
