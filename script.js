const projects = `
<h1>Projects</h1>
<ul>
    <li><a href="https://blueberrytech123.github.io/pbgs">Punch Bad Guys Simulator</a></li>
    <li><a href="https://timewinder.github.io/">Timewinder Website</a></li>
</ul>
`;

const about = `
<h1>About Me</h1>
<ul>
    <li>An Art and CompSci student in Henry M. Gunn High School</li>
    <li>Web Development</li>
    <li>Unity Game Development</li>
    <li>Traditional Art</li>
    <li>Co-president of <a href="https://timewinder.github.io/">Timewinder</a> (game dev club)</li>
</ul>
`;

const contact = `
<h1>Contact</h1>
<ul>
    <li><a href="mailto:blueberry21007@gmail.com">blueberry21007@gmail.com</a></li>
    <li><a href="https://github.com/BlueberryTech123">Github</a></li>
</ul>
`;

function changeWindow(content) {
    let _content = document.querySelector("#content");

    _content.innerHTML = content;
}