<h1>Mafia app</h1>

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
MYSQL_PORT=NUMBER (REQUIRED)
MYSQL_URL=string (REQUIRED)
MYSQL_USER=string (REQUIRED)
MYSQL_PASSWORD=string (REQUIRED)
MYSQL_DATABASE=string (REQUIRED)
<br>
REDIS_HOST=string (REQUIRED)
REDIS_PORT=number (REQUIRED)
REDIS_PASSWORD=string (REQUIRED)
REDIS_DATABASE=number (REQUIRED 0-15)
            </pre>
        </div>
        <div>
            <h4>apps/frontend</h4>
            <pre>
PUBLIC_POCKETBASE_URL=string (REQUIRED)
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
