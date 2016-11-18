var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one': {
    title: 'Article One | Subham Pramanik',
    heading: 'Article One',
    date: '26 Oct, 2016',
    content: `
                <p>
                    This is the content of article one.
                </p>
                <p>
                    This is the content of article one.
                </p>
                <p>
                    This is the content of article one.
                </p>
                <p>
                    This is the content of article one.
                </p>`
},
    'article-two': {
        title: 'Article Two | Subham Pramanik',
        heading: 'Article Two',
        date: '26 Oct, 2016',
        content: `
                    <p>
                        This is the content of article one.
                    </p>
                    <p>
                        This is the content of article one.
                    </p>
                    <p>
                        This is the content of article one.
                    </p>
                    <p>
                        This is the content of article one.
                    </p>`
    },
    'article-three': {
        title: 'Article Three | Subham Pramanik',
        heading: 'Article Three',
        date: '26 Oct, 2016',
        content: `
                    <p>
                        This is the content of article one.
                    </p>
                    <p>
                        This is the content of article one.
                    </p>
                    <p>
                        This is the content of article one.
                    </p>
                    <p>
                        This is the content of article one.
                    </p>`
    },
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewpoint" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

var counter=0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
})

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
