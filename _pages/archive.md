---
layout: page
permalink: /archive/
title: Archive
---


<div id="archives">
  <section id="archive">
      <ul class="date-order">
     <h3>Most Recent Posts</h3>
     {%for post in site.posts %}
     {% if post.hidden != true %}
          <p><b><a href="{{ site.baseurl }}{{ post.url }}">{% if post.title and post.title != "" %}{{post.title}}{% else %}{{post.excerpt |strip_html}}{%endif%}</a></b> - {% if post.date and post.date != "" %}{{ post.date | date: "%e %B %Y" }}{%endif%}</p>
      {% endif %}
      {% endfor %}
      </ul>
    <h3>Oldest Posts</h3>
  </section>
</div>
