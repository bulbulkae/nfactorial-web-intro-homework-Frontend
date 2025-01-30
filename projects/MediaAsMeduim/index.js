'use strict';

const posts = document.querySelector('#newlist');
const details = document.querySelector('#details');
let datast;

const getData = () => {
  fetch(
    'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=1yaC2zo9D8kyUL7MkOsjTFpos7BG2Vtc',
  )
    .then((response) => response.json())
    .then((data) => {
      datast = data.results;

      datast.map((el, index) => {
        // console.log(el);
        // console.log(index);

        const dateString = el.published_date;
        const date = new Date(dateString);
        const day = date.getUTCDate();
        const month = date.toLocaleString('en-US', { month: 'long' });
        const year = date.getUTCFullYear();
        const formattedDate = `${day} ${month} ${year}`;
        const itemId = index;

        posts.innerHTML += `
        
          <div class="new-item" id="parentDiv" onclick = "showDetailsPage(${itemId})">
            <div class="new-item-content">
              <div class="new-item-content-top">
                <div class="top-info">
                  <div 
                    class="image-container" 
                    style="width: 24px; height: 24px; border-radius: 30px;"
                  > 
                    <img 
                      alt="avatar-img" 
                      class="img" 
                      src="${el.multimedia[2].url}" 
                    /> 
                  </div>
                  <p class="in inter">
                    <span class="authorname">${el.byline}</span> in
                    <span class="topicname">${el.geo_facet}</span>
                  </p>
                  <p class="date">${formattedDate}</p>
                </div>
                <div class="text inter">
                  <p class="title">${el.title}</p>
                  <p class="description inter">${el.abstract}</p>
                </div>
              </div>
              <div class="new-item-content-infobuttom">
                <div class="info">
                  <button class="btn">${el.section}</button>
                  <p class="inter">12 min read</p>
                  <p class="delimeter inter">|</p>
                  <p class="inter">Selected for you</p>
                </div>
              </div>
            </div>
            <div class="image-container">
              <img 
                alt="ni-image" 
                class="img" 
                src="${el.multimedia[0].url}" 
              />
            </div>
          </div>
        `;
      });
    });
};

getData();

const showDetailsPage = (itemId) => {
  // console.log(datast);
  // console.log(itemId);

  datast.forEach((el, index) => {
    if (index === itemId) {
      const dateString = el.published_date;
      const date = new Date(dateString);
      const day = date.getUTCDate();
      const month = date.toLocaleString('en-US', { month: 'long' });
      const year = date.getUTCFullYear();
      const formattedDate = `${day} ${month} ${year}`;
      details.innerHTML = `
  <div class="details" id="details">
      <div class="top">
        <div class="left">
          <div class="ava-img-div">
            <img alt="ava-img" class="ava-img" src="${el.multimedia[2].url}" />
          </div>
          <div class="info-details">
            <div class="authornamedetails">${el.byline}</div>
            <div class="info-top">
              <div class="date">${formattedDate}</div>
              <div class="delimeter">.</div>
              <div class="">12 min read</div>
              <div class="delimeter">.</div>
              <div class="">Member-only</div>
            </div>
          </div>
        </div>
        <div class="right">
          <img
            alt="linkedin"
            src="https://s3-alpha-sig.figma.com/img/0b04/ff6d/ec82af9e1bf9093e8f16bbfa4bace861?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M4or67SS0uADbtkq6GW-WbtPqNdxfcSS5gzuA5qP9ulVAHT-BXbVXeLQ6H-ftnKvyQlLAG6wEjhWATB4Y1O2pE81WKEQHFx9Ccks91docEH4miMRS3GKKBS8RTT8xSNFzsn86RJdqQExb7DlDWFlY1TDcRPFHkvll~VT0L~SSgqO~8s0sMdlKvMYn5PtTZuTJxeMVHNU2SjCE9pr3r8GJCimwyAjCLi7d6LMyyduHQ29OFQ1bktpDlfg-dEeiFKJJ1FP2WT6-v811PZDLEm2aXNQHjFkRQnJ1GfycEQbZX~dfhHwE-zqenRXAZDSrCe2i43PT0WO0T4YX1cwer7y9A__"
          />
          <img
            alt="facebook"
            src="https://s3-alpha-sig.figma.com/img/c6bf/3afe/c6227bfcfc21ea90afcee5ab577208bf?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jtylembPUkKNNFfifEdLwJGRfdHn~vjwvnZic-QRs5hmUxu7-sLjM95nn7qlFP~VlhbVl7tjihuQLuVOUnFvq~htq26rKy3FJH63HNzc-DIgq2gU7hZjAByGTXgb4HdKQsLzmXu~~oa4LWTtsAG-A0hQF2IYhZ527xWRdhoNciy3wZSENDLYe1mU~QSaQqgD9hS8mxf~JDA4Wwp0OA1e3xMAc61LDGW6OYWTwHo69W8YpUwp88eHnxbRXfw3ZRTD0c54nuW0gawune0LPDie-Tg-iHQOHueo4JqPe2fWNENIWHm6aZOP-kybjkw6VPC5rtJi6fq9Hybt4sRnWGheFg__"
          />
          <img
            alt="twitter"
            src="https://s3-alpha-sig.figma.com/img/fa44/fde6/a07f665d9c047a50ca469c5736f31d5a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TeQnaDtqAmZ2QLUBMO7y8cxxoVJslV2f6xkOqAE07MkpQMqSLu1OhL0IZ8v~BheSj-ZqHK0Rv21JPHMM1ghvDhFCxvaPkqFm6aTIJtGYOd1De-CbInrZglHXsoLsTuoKJuwXLdGf88iBxZ9QeCJTfbmbJLh5zZLHCweoB574jzbFeKyMo4d9SYt98CEYHnYDxQ-dSDLGtZGIrajO~kyOF8j36DXOp6u8YgNxKGZoQnM1cEzYLIo6l~dGF4QqRaiWqhI9O69XU2DHnRcGbBc2NZuNZFQzE5F~GpUqDcI4i5UgzPkflUXyrZpSFvI85H4fojYV8kSSYHl1xRDmoRqbvw__"
          />
        </div>
      </div>
      <div class="text-dt">
        <p class="title-details inter">${el.title}</p>
        <p class="description-details inter">
          ${el.abstract}
        </p>
      </div>
      <div class="content-img-div">
        <img class="content-img" alt="content-img" src="${el.multimedia[0].url}"/>
      </div>
      <div class="content-text-div">
        <p class="subheader inter">${el.subsection ? el.subsection : 'Subsection'} </p>
        <p class="content-text inter">
          How long are you awake in the morning before you go online? Perhaps it’s while you’re
          still lying in bed, using a news feed or social media as the needed stimulant to push you
          out from under the covers. Or maybe you wait to open your device until after a warm shower
          and cup of coffee. If you use sleep tracking apps, you might say you never signed off in
          the first place.
          <br />
          <br />
          And, like millions of others during the pandemic, the internet is probably what enabled
          you to stay in touch with family, or complete entire years of work and/or school remotely.
          If this sounds familiar, then you live in a part of the world where an internet connection
          now counts as an essential utility — one that’s as easy to take for granted as the natural
          gas heating your shower water or the electricity powering your coffee maker.
          <br />
          <br />
          But if you think we’re hyperconnected today, just wait. Globally, just over 55% of today’s
          households have an internet connection. This gap between the internet haves and have-nots
          is referred to as the digital divide, and access is skewed toward richer nations. The gap
          is projected to close in the next decade as billions of homes connect to the internet for
          the first time and by 2030 it’s estimated that the technology industry could account for
          20% of the global electricity demand. This presents a troublesome dichotomy. On one hand,
          it supports livelihoods, educations, and bolsters the global economy; on the other hand,
          the increased usage of the apps, websites, and services that we build will place an even
          greater strain on our already-overloaded power grids.
        </p>
      </div>
      <div class="infobuttom-details">
        <div class="actions-left">
          <div class="div">
            <img
              alt="likes"
              src="https://s3-alpha-sig.figma.com/img/f248/6ee0/2d7ec71fc6661cefbb701de36587c5c5?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AXFt4Ntp91XuDZyYwxZRmQfu1~1KLqMr2jqvPm9dyES3iWpZ4sSKDhah02tpfrk0JUXAkre-J4ZUBtI6OEi3qfCemfRAYGpKge5btjEFcXEfxCageRFab0YzJaeJUb1iZ0jiMykK-gm9jmqwm7gs4ihqlQyK848dh5BSBhf9~TD~rPA25h9AtT8C-DN2D7P4nRNiXQ7ySw-pUGphqe~41RSDKLnZtjpH1IacM-3xEH2fN83bTZfawQ~3dHmUqZnZyrCSw3fXabHqVKVi1Ia9Wbg3lRgMOIETXnYlTdHekj0VEWgSnxHTLI6OUw2vB2lNPiqTQKzNEpcEGswjlXJV2w__"
            />
            <p>120</p>
          </div>

          <div class="div">
            <img
              alt="comments"
              src="https://s3-alpha-sig.figma.com/img/df19/5722/59fc6566c4c0ea46db49976f67e25beb?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=akQkCQERiX0mWBQdpAfiJ1CK1ClNf6Zmx56NuT39GrDcE2~pne~72lEtkE8AtzjdDVs3jZYuFSS5T88OnTZyKxnjygWS6dMFCOTJSRuLwSaJriVYo5gULE-XNvyR28b-XjsejO8mWV6A6HGy9D56IBkAsaQn60M8xZGGywJ1ZgJU10tLkXvhaWqBlYsOG3w52CLCZ4urJskFuQ8wiCJT8zPPaezpStt8lA9H1L4hQZdqMBYseayAXRJTs07hi7rxIgfFa~ZqmjT8V0zGgoG0MwW-hdPLbbF1x0aOsnNK7y0kxJv4o6vP8MY3D4kBM9bsNnVT6vCxvYUfkEXQjGDDpw__"
            />
            <p>12</p>
          </div>
        </div>
        <div class="actions-right">
          <div class="div">
            <img
              alt="saved"
              src="https://s3-alpha-sig.figma.com/img/427d/d47c/6be75205c37ce9023e8364dbcf18d779?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=haJUT9Hx5xobsvtrJSXr~Prfy-wRWOAdQ3I0sjTHhbcG42VHryZtuHVeI4-cpWmwqD~JUb~9a7CQ-TCtiiMqePVu6jpuzCJ2S82S-jjmENMtUvElVMszdyhoYZjP7WedPf0nR8zYcY5KWIB-Twdt0EhAhcpgMiPoXvptjp4T3hxu6Hq92qmixaQvS1ftGn8qjOMciTUkHmbD8Nnlw~V~0thFIc-LtJc24xHzl5y1SoljJTXjnBbPgo~h3-CjcShDIGRx~WxejMBA7LCCerJW8OUIay0KVRFp2tZGVlbc-6W2YJ0mbXSpvMqFVx-rSAZW1Cjk3wep9ghoGKdsxXcPXw__"
            />
          </div>
        </div>
      </div>
    </div>`;
    }
  });

  document.getElementById('newlist').style.display = 'none';
  document.getElementById('details').style.display = 'flex';
  document.getElementById('back').style.display = 'flex';
};

const hideDetailsPage = () => {
  document.getElementById('newlist').style.display = 'flex';
  document.getElementById('details').style.display = 'none';
  document.getElementById('back').style.display = 'none';
};
