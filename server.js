const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url).pathname;
    if (reqUrl == "/") {
        res.writeHead(200, {"content-type": `text/html`});
        res.end(
            `<body>
                <nav id="navbar">
                    <ul id="nav-link">
                        <li> <a href="/">Home</a></li>
                        <li><a href= "/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <section id="welcome-section">
                    <h1 id="header"><span style="color: rgb(235, 93, 143);">Hey, are you looking for a web developer?</span></h1>
                    <p>...nice to meet you.</p>
                    <p>My name is Chizoba ODINAKA, I was a Math teacher, currently I am training at Zuri, building soft skills necessary for a tech career.</p>
                </section>
            
            
                <footer>
                    &copy ZIHCO 2022
                </footer>
            </body>`
        );
    }else if (reqUrl == "/contact") {
        res.writeHead(200, {"content-type": `text/html`});
        res.end(
            `<body>
            <nav id="navbar">
                <ul id="nav-link">
                    <li> <a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <section id="contact">
                <div>
                    <h1><span style="color: rgb(235, 93, 143);">Hit my DM -</span>
                    </h1>
                    <p>Lets do it again...</p>
                </div>
                <div>
                    <a
                    href="https://facebook.com/jamesmatics"
                    target="_blank"
                    ><i></i> Facebook</a
                    >
                    <a
                    id="profile-link"
                    href="https://github.com/ZIHCO"
                    target="_blank"
                    ><i></i> GitHub</a
                    >
                    <a
                    href="https://twitter.com/jamesmatics"
                    target="_blank"
                    ><i></i> Twitter</a
                    >
                    <a href="mailto:chizobajames@yahoo.com"
                    ><i></i> Send a mail</a
                    >
                    <a href="tel:555-555-5555"
                    ><i></i> Call me</a
                    >
                </div>
            </section>
            <br>
            <footer>
                &copy ZIHCO 2022
            </footer>  
            </body>`
                )
    }else if (reqUrl == "/about") {
        res.writeHead(200, {"content-type": `text/html`});
        res.end(
    `<body>
    <nav id="navbar">
		<ul id="nav-link">
			<li> <a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
	<section id="about">
		<div>
            <h1><span style="color: rgb(235, 93, 143);">Below are links to some of my projects:</span></h1>
			<a href="https://codepen.io/zihco/full/jOaNVRM">
				<p>
					Data form
				</p>
			</a>
			<a href="https://codepen.io/zihco/full/jOaQjXe" target="_blank">
				<p class="project-title">
					Documentation page
				</p>
			</a>
		</div>
		<h1><span style="color: rgb(235, 93, 143);">Do you like what you see?</span></h1>
        <p>I could help you with your web app jobs</p>
    </section>
    <br>
    <footer>
        &copy ZIHCO 2022
    </footer> 
</body>`
        )
    }
})

server.listen(5000, "localhost");
console.log("Working fine");