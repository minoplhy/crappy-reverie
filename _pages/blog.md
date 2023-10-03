---
layout: page_notitle
title: Blog
permalink: /blog/
---

## <img src="/assets/images/toshino.gif" alt="Toshino Kyoko!" width="100"/> Yaw! Sometimes I write a blog, though mostly not.
> <code style="color:black;">Blah, Please don't expect any informative or technical blogs. <img src="/assets/images/akari!!_thumbsup.gif" alt="Akari!!!!" width="100"/></code>

<hr>

<div class="posts">
  {% for post in site.posts %}
  {% if post.hidden != true %}
    <article class="post">
      <a href="{{ site.baseurl }}{{ post.url }}">
        <h1>{{ post.title }}</h1>

        <div>
          <p class="post_date">{{ post.date | date: "%B %e, %Y" }}</p>
        </div>
      </a>
      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
    {% endif %}
  {% endfor %}
</div>