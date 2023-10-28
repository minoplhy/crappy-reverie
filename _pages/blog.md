---
layout: page_notitle
title: Blog
permalink: /blog/
---

## <img decoding="async" id="blog-rand-img" src="/assets/images/toshino.gif" alt="Toshino Kyoko!" width="100"/> Yaw! Sometimes I write a blog, though mostly not.
> <code style="color:black;">Blah, Please don't expect any informative or technical blogs. <img decoding="async" id="blog-rand-img-2" src="/assets/images/akari!!_thumbsup.gif" alt="Akari!!!!" width="100"/></code>

<script src="{{ site.baseurl }}/assets/js/kirby-img.js"></script>
<script>
  const Img_1 = ['/assets/images/toshino.gif', '/assets/images/senior.gif'];
  const Img_2 = ['/assets/images/akari!!_thumbsup.gif', '/assets/images/toshino-hehe.gif'];
  document.onload = randomImageBroker('blog-rand-img', Img_1);
  document.onload = randomImageBroker('blog-rand-img-2', Img_2);
</script>
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