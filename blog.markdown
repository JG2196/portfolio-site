---
layout: blog
title: Blog
---
<h3 class="mb-2 h-grey">Blog</h3>
<div>
  {% for post in site.posts %}
    <a href="{{ post.url | relative_url }}" class="post-card" >
      <div class="card mb-3">
        <div class="card-body">
          <div class="row">
          <div class="col">
          <span>{{ post.date | date: "%B %d, %Y" }}</span>
          {% assign words = post.content | number_of_words %}
          {% assign minutes_float = words | times: 1.0 | divided_by:200 %}
          {% assign minutes = minutes_float | ceil %}
          {% if minutes < 1 %}
            {% assign minutes = 1 %}
          {% endif %}
          <p class="reading-time">{{ minutes }} min read</p>
          </div>
          <div class="col">
          <h3>{{ post.title }}</h3>
          <p>{{ post.exert }}</p>
          </div>
          </div>
        </div>
      </div>
    </a>
  {% endfor %}
</div>
