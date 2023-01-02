const text = `
## Abstract
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare, dolor sed porta volutpat, orci ligula ultrices dolor, sed commodo metus ex at lorem. Nulla pellentesque erat vel diam dictum, nec tempor ipsum molestie. Integer ut nulla efficitur, porttitor augue at, consectetur tortor. Vivamus euismod, ex ut ornare feugiat, sapien lacus venenatis augue, ut gravida lacus felis eget erat. Vivamus hendrerit magna rhoncus tincidunt interdum. Nunc bibendum, felis ut pharetra semper, elit est luctus quam, nec semper eros quam id ante. Sed iaculis nisi mi, a ullamcorper enim convallis finibus.

<figure>
  <img src="https://picsum.photos/1920/1080.jpg">
  <figcaption style="text-align: center">Caption text</figcaption>
</figure>

Sed auctor tempus libero, in vulputate mi hendrerit a. Cras ultrices accumsan tristique. In hendrerit neque ut leo molestie, at sodales sapien hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sodales mollis vulputate. Morbi condimentum rhoncus velit, ultrices interdum leo luctus nec. Aenean porttitor tempor tellus, eu tempor nunc aliquam ut. Quisque tortor ex, facilisis in pretium quis, varius id felis.

## Table of Contents
- Title 1
- Title 2
  - Subtitle 1
  - Subtitle 2
- Title 3
  - Subtitle 3
    - Inner subtitle 1
  - Subtitle 4
- Title 5

## Actual table
| head 1 | head 2 | head 3 | head 4 |
|--------|--------|--------|--------|
| row  1 | row  1 | row  1 | row  1 |
| row  2 | row  2 | row  2 | row  2 |
| row  3 | row  3 | row  3 | row  3 |
| row  4 | row  4 | row  4 | row  4 |

\`\`\`js
const a = 1;
const b = 2;
const c = a + b;
\`\`\``;

export default function handler(request, response) {
  const { id } = request.query;

  response.status(200).json({
    id,
    title: "Post Title " + id,
    content: text,
    author: "John Doe",
    date: new Date().toString(),
  });
}
