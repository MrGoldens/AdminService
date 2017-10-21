<html>
<head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
</head>
<body>
<div class="news-view view">
    {% for item in list %}
    <div class="item">
        <a href="{{ item.url }}">{{ item.title }}</a>
    </div>
    {% endfor %}
    {{ helper.relativeTime(item.time) }}
</div>
</body>
</html>
