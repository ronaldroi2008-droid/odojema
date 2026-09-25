<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>When (and How Much) to Ask for a Raise</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root{
    --paper:#F7F5F0; --ink:#1B1F23; --ink-soft:#4A5157;
    --green:#1F6F54; --green-soft:#E7F0EC;
    --amber:#C98A2E; --amber-soft:#FAF0DE;
    --line:#DEDAD0;
    padding-top: env(safe-area-inset-top,0px);
    padding-bottom: env(safe-area-inset-bottom,0px);
  }
  @media (prefers-color-scheme: dark){
    :root:not([data-theme="light"]){
      --paper:#15181B; --ink:#EDEBE6; --ink-soft:#A9AFB4;
      --green:#4FAE8C; --green-soft:#1C2B26;
      --amber:#E0A54B; --amber-soft:#2A2113;
      --line:#2A2E32;
    }
  }
  :root[data-theme="dark"]{
    --paper:#15181B; --ink:#EDEBE6; --ink-soft:#A9AFB4;
    --green:#4FAE8C; --green-soft:#1C2B26;
    --amber:#E0A54B; --amber-soft:#2A2113;
    --line:#2A2E32;
  }
  *{box-sizing:border-box;}
  html{scroll-padding-top:env(safe-area-inset-top,0px);}
  body{
    margin:0; background:var(--paper); color:var(--ink);
    font-family:'Inter',system-ui,sans-serif;
    font-size:17px; line-height:1.65;
  }
  .wrap{max-width:680px; margin:0 auto; padding:64px 24px 96px;}
  header.masthead{margin-bottom:48px;}
  .kicker{font-family:'Inter',sans-serif; font-size:14px; color:var(--green); font-weight:600; margin-bottom:14px;}
  h1{
    font-family:'Source Serif 4',serif; font-weight:700;
    font-size:clamp(32px,5vw,46px); line-height:1.12; margin:0 0 18px;
    letter-spacing:-0.01em;
  }
  .excerpt{font-size:19px; color:var(--ink-soft); line-height:1.55; margin:0 0 8px; max-width:60ch;}
  .meta{font-size:14px; color:var(--ink-soft); margin-top:20px;}
  h2{
    font-family:'Source Serif 4',serif; font-weight:600; font-size:28px;
    margin:56px 0 18px; padding-top:8px; border-top:1px solid var(--line);
    padding-top:32px;
  }
  h3{font-family:'Inter',sans-serif; font-weight:600; font-size:18px; margin:32px 0 10px; color:var(--ink);}
  p{margin:0 0 18px; max-width:66ch;}
  ul, ol{margin:0 0 20px; padding-left:22px;}
  li{margin-bottom:10px; max-width:62ch;}
  strong{font-weight:600;}
  a{color:var(--green); text-decoration-color:var(--line); text-underline-offset:3px;}

  .callout{
    background:var(--green-soft); border-left:3px solid var(--green);
    padding:20px 24px; border-radius:2px; margin:28px 0;
  }
  .callout p:last-child{margin-bottom:0;}

  /* checklist */
  .checklist{list-style:none; padding:0; margin:24px 0;}
  .checklist li{
    display:flex; gap:14px; align-items:flex-start;
    padding:18px 0; border-bottom:1px solid var(--line); max-width:none;
  }
  .checklist li:first-child{padding-top:0;}
  .num{
    font-family:'Source Serif 4',serif; font-weight:600; font-size:20px; color:var(--green);
    flex:0 0 28px;
  }
  .checklist .q{font-weight:600; margin-bottom:4px; display:block;}
  .checklist .a{color:var(--ink-soft); font-size:15px; margin:0;}
  .checklist .a ul{margin:8px 0 0; padding-left:18px;}
  .checklist .a li{padding:0; border:none; margin-bottom:4px; display:list-item; font-size:15px;}

  table{width:100%; border-collapse:collapse; margin:20px 0 28px; font-size:15px;}
  th,td{text-align:left; padding:12px 14px; border-bottom:1px solid var(--line);}
  th{font-family:'Inter',sans-serif; font-weight:600; color:var(--ink-soft); font-size:13px; text-transform:uppercase; letter-spacing:.03em;}

  /* calc card */
  .calc{
    background:var(--amber-soft); border-radius:4px; padding:28px 26px;
    margin:24px 0 28px;
  }
  .calc-row{display:flex; justify-content:space-between; align-items:baseline; padding:10px 0; border-bottom:1px solid rgba(0,0,0,.06);}
  .calc-row:last-child{border:none; padding-top:16px;}
  .calc-label{font-size:15px; color:var(--ink-soft);}
  .calc-value{font-family:'Source Serif 4',serif; font-size:20px; font-weight:600;}
  .calc-row:last-child .calc-value{font-size:26px; color:var(--amber);}

  details{
    background:transparent; border:1px solid var(--line); border-radius:4px;
    padding:16px 20px; margin-bottom:12px;
  }
  details summary{font-weight:600; cursor:pointer; font-size:16px;}
  details p{margin:12px 0 0;}

  footer{margin-top:64px; padding-top:24px; border-top:1px solid var(--line); font-size:13px; color:var(--ink-soft);}

  @media (max-width:520px){
    .wrap{padding:40px 18px 72px;}
    h2{font-size:24px;}
    table{font-size:14px;}
    th,td{padding:10px 8px;}
  }
</style>
</head>
<body>
<div class="wrap">

  <header class="masthead">
    <div class="kicker">Career &amp; Compensation</div>
    <h1>When (and How Much) to Ask for a Raise</h1>
    <p class="excerpt">How to know if it's the right time to ask for a raise, how much to realistically ask for, and how to make the case with evidence instead of guesswork.</p>
    <div class="meta">September 26, 2026</div>
  </header>

  <h2 style="margin-top:0;border-top:none;padding-top:0;">Signs it's a good time to ask</h2>
  <p>Timing matters more than most people expect. A well-reasoned raise request made at the wrong moment can still get rejected — not because the request is unfair, but because the context works against it.</p>
  <ul>
    <li><strong>You've taken on responsibilities beyond your original role.</strong> If your job today looks meaningfully different (and bigger) than the job you were hired for, your pay should reflect that.</li>
    <li><strong>You have measurable results to point to.</strong> Completed projects, revenue impact, efficiency improvements, or positive feedback are far stronger than "I've been here a while."</li>
    <li><strong>It's been over a year since your last raise.</strong> Outside of promotions, most companies review compensation annually.</li>
    <li><strong>The company is doing well.</strong> Raises are easier to approve out of a healthy budget.</li>
    <li><strong>You have a competing offer or clear market data.</strong> Nothing clarifies a compensation conversation faster than evidence of market rates.</li>
  </ul>

  <h2>Signs it might be the wrong time</h2>
  <ul>
    <li><strong>The company just went through layoffs or a hiring freeze.</strong> Budgets are tightest right after cuts.</li>
    <li><strong>You're new to the role.</strong> Most employers expect at least 6–12 months first.</li>
    <li><strong>Your recent performance has been inconsistent.</strong> Asks land better after a strong review cycle.</li>
    <li><strong>There's no scheduled review process or budget context.</strong> Asking blind is riskier than asking informed.</li>
  </ul>
  <p>None of these make asking impossible — they mean the conversation may need a different approach, or might be worth delaying a few months.</p>

  <h2>How much should you ask for?</h2>
  <p>This is where most raise requests go wrong: asking for too little, or too much with no supporting evidence.</p>

  <h3>Start with market data</h3>
  <p>Look up your role, experience level, and location on salary comparison sites, industry surveys, or platforms like LinkedIn Salary and Glassdoor.</p>

  <h3>Calculate the actual dollar gap</h3>
  <p>If market data suggests your role pays $65,000–$75,000 and you're currently at $58,000, that gap becomes your negotiating range — not a number picked out of thin air.</p>
  <div class="callout">
    <p>A raise calculator can help you quickly see what a given percentage increase translates to in dollars, as both a lump amount and a new monthly figure.</p>
  </div>

  <h3>Typical raise ranges</h3>
  <table>
    <tr><th>Reason</th><th>Typical range</th></tr>
    <tr><td>Standard annual increase</td><td>3–5%</td></tr>
    <tr><td>Expanded responsibilities</td><td>5–10%</td></tr>
    <tr><td>Promotion</td><td>10–20%+</td></tr>
    <tr><td>Competing offer</td><td>Match or slightly exceed</td></tr>
  </table>

  <h3>Example raise calculation</h3>
  <div class="calc">
    <div class="calc-row"><span class="calc-label">Current salary</span><span class="calc-value">$50,000</span></div>
    <div class="calc-row"><span class="calc-label">Requested increase</span><span class="calc-value">8%</span></div>
    <div class="calc-row"><span class="calc-label">Raise amount</span><span class="calc-value">$4,000</span></div>
    <div class="calc-row"><span class="calc-label">New salary</span><span class="calc-value">$54,000</span></div>
  </div>

  <h2>Raise readiness checklist</h2>
  <p>Before asking for a raise, evaluate whether you have a strong foundation for the conversation.</p>
  <ul class="checklist">
    <li><span class="num">1</span><div><span class="q">Has it been at least 12 months since your last raise?</span><p class="a">Many organizations review compensation annually.</p></div></li>
    <li><span class="num">2</span><div><span class="q">Have your responsibilities increased?</span><p class="a">If your work now goes beyond your original job description, your pay may not reflect your actual role.</p></div></li>
    <li><span class="num">3</span><div><span class="q">Can you demonstrate measurable results?</span><p class="a">Revenue growth · cost savings · process improvements · client retention · project delivery · team leadership.</p></div></li>
    <li><span class="num">4</span><div><span class="q">Does market data suggest you're underpaid?</span><p class="a">Research pay for your role, experience, and location.</p></div></li>
    <li><span class="num">5</span><div><span class="q">Is the company financially stable?</span><p class="a">Even well-deserved raises are easier to approve when budgets are healthy.</p></div></li>
  </ul>
  <table>
    <tr><th>Yes answers</th><th>Readiness</th></tr>
    <tr><td>0–2</td><td>Gather more evidence before asking</td></tr>
    <tr><td>3–4</td><td>Reasonable basis for a discussion</td></tr>
    <tr><td>5</td><td>Strong foundation for the conversation</td></tr>
  </table>

  <h2>Building your case</h2>
  <ol>
    <li><strong>List concrete accomplishments</strong> from the past review period.</li>
    <li><strong>Tie those accomplishments to business impact.</strong> "Reduced processing time by 20%" beats a general description of effort.</li>
    <li><strong>Bring market data</strong> to show your pay relative to your role and experience.</li>
    <li><strong>Propose a specific number</strong>, not a vague range.</li>
    <li><strong>Practice saying the number out loud</strong> before the conversation.</li>
  </ol>

  <h2>What to do if the answer is no</h2>
  <p>Ask directly what would need to change — in performance, scope, or timing — for the answer to be different, and when it would be reasonable to revisit the conversation.</p>
  <p>If the answer is a repeated "no" with no clear path forward, especially alongside market data showing you're underpaid, that's a signal worth taking seriously.</p>

  <h2>Frequently asked questions</h2>
  <details><summary>How much of a raise is reasonable to ask for?</summary><p>Standard annual increases are typically 3–5%, expanded responsibilities often justify 5–10%, and promotions can range 10–20% or more. Ground the number in market data for your specific role.</p></details>
  <details><summary>When is the best time to ask for a raise?</summary><p>After a strong performance period, when responsibilities have grown, over a year since your last adjustment, and when the company is financially stable.</p></details>
  <details><summary>Should I mention a competing offer?</summary><p>It can be effective, but use it carefully — as context, not as a threat.</p></details>
  <details><summary>What if my manager says there's no budget?</summary><p>Ask what would need to change, and get a specific timeline for reconsideration.</p></details>
  <details><summary>How do I know if I'm underpaid?</summary><p>Compare your pay against market data for your role, experience, and location. A consistent gap is a strong signal.</p></details>

  <footer>When (and How Much) to Ask for a Raise · Career &amp; Compensation</footer>
</div>
</body>
</html>