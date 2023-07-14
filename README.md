<h1>Mafia fullstack application</h1>

<section>
    <h2>Prerequirements</h2>
    <ul>
        <li>
            <strong>MySQL Server</strong>
        </li>
        <li>
            <strong>Redis Server</strong>
        </li>
        <li>
            <strong>NodeJS v18.0.0 or higher</strong>
        </li>
        <li>
            <strong>pnpm</strong>
            <pre>npm install pnpm --global</pre>
        </li>
        <li>
            <strong>turbo</strong>
            <pre>pnpm install turbo --global</pre>
        </li>
    </ul>
</section>

<section>
    <h2>Server config requirements</h2>
    <div>
        <h3>Environment variables</h3>
        <div>
            <h4>apps/backend</h4>
            <pre>
<span>EXPRESS_PORT= (REQUIRED)</span>
<br>
<span>MYSQL_PORT= (default 3306)</span>
<span>MYSQL_URL= (default localhost)</span>
<span>MYSQL_USER= (default root)</span>
<span>MYSQL_PASSWORD= (default !empty string!)</span>
<span>MYSQL_DATABASE= (default defaultDatabase)</span>
<br>
<span>REDIS_HOST= (default 127.0.0.1)</span>
<span>REDIS_PORT= (default 6379)</span>
<span>REDIS_PASSWORD= (default !empty string!)</span>
<span>REDIS_DATABASE= (default 0)</span>
            </pre>
        </div>
        <div>
            <h4>apps/frontend</h4>
            <pre>
<span>PUBLIC_POCKETBASE_URL=string (REQUIRED)</span>
            </pre>
        </div>
    </div>
<section>

<section>
    <h2>To run this app exec</h2>
    <ol>
        <li>
            <pre>pnpm install</pre>
        </li>
        <li>
            <pre>pnpm run dev</pre>
        </li>
    </ol>
</section>
