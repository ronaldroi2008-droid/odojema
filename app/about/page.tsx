import Link from "next/link";

export const metadata = {
  title: "About Us | Daily Prayer Hub",
  description:
    "Learn about Prayer.Odojema.com, a place for Christian prayers, Bible verses, and encouragement for every season of life.",
};

const purposes = [
  "Find meaningful prayers for everyday life and difficult circumstances.",
  "Discover Bible verses that offer comfort, wisdom, strength, and hope.",
  "Develop a consistent personal prayer habit.",
  "Reflect on God's Word and apply its teachings to daily life.",
  "Find words of encouragement to share with family, friends, and loved ones.",
];

const offerings = [
  {
    title: "Daily Prayers",
    text: "Morning prayers, evening prayers, prayers of gratitude, and prayers for guidance throughout the day.",
  },
  {
    title: "Healing and Strength Prayers",
    text: "Prayers for people facing illness, difficult circumstances, uncertainty, and emotional challenges.",
  },
  {
    title: "Prayers for Peace and Hope",
    text: "Words of encouragement for moments when you need comfort, courage, patience, and renewed faith.",
  },
  {
    title: "Bible Verses and Scripture Reflections",
    text: "Collections of Bible passages about healing, strength, anxiety, hope, peace, and other important aspects of Christian life.",
  },
  {
    title: "Prayers for Family and Loved Ones",
    text: "Prayers for the people who matter most, including those who may need encouragement, support, or comfort.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-stone-50 text-stone-800">
      {/* Header */}
      <section className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700 mb-3">
            About Us
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            A Place for Prayer, Faith, and Hope
          </h1>
          <p className="text-lg text-stone-600">
            Welcome to Prayer.Odojema.com, a place where you can find prayers,
            biblical encouragement, and comforting words for the different
            seasons of life.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-12 text-lg leading-8">
        {/* Intro */}
        <section className="space-y-4">
          <p>
            Life brings moments of joy, uncertainty, gratitude, and hardship.
            Sometimes, we know exactly what to pray. Other times, we struggle
            to find the right words. This website was created to help you
            pause, reflect, and turn to God through prayer and His Word.
          </p>
          <p>
            Whether you are beginning a new day, seeking peace during a
            difficult season, praying for healing, or asking God for strength
            and guidance, we hope you will find encouragement here.
          </p>
        </section>

        {/* Purpose */}
        <section>
          <h2 className="font-serif text-3xl font-bold mb-4">Our Purpose</h2>
          <p className="mb-4">
            Our purpose is to make Christian prayers and biblical
            encouragement accessible to people seeking a deeper connection
            with God. Through our content, we aim to help readers:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            {purposes.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p>
            We believe prayer does not require perfect words. It begins with
            an honest heart, a willingness to seek God, and the faith to bring
            our concerns before Him.
          </p>
        </section>

        {/* What you will find */}
        <section>
          <h2 className="font-serif text-3xl font-bold mb-4">
            What You Will Find Here
          </h2>
          <p className="mb-6">
            Prayer.Odojema.com offers a growing collection of Christian
            devotional resources, including:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-stone-200 bg-white p-5"
              >
                <h3 className="font-serif text-xl font-bold mb-2">{o.title}</h3>
                <p className="text-base leading-7 text-stone-600">{o.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6">
            Our goal is to make these resources easy to read, understand, and
            use in your personal devotional time.
          </p>
        </section>

        {/* Faith and approach */}
        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-bold">
            Our Faith and Approach
          </h2>
          <p>
            We approach prayer with reverence for God and respect for the
            teachings of the Bible. Our content is intended to encourage faith,
            reflection, compassion, and trust in God.
          </p>
          <p>
            We recognize that every person&apos;s circumstances are different.
            A prayer is not a promise that every situation will unfold exactly
            as we hope. Rather, prayer can be a way to express our fears, give
            thanks, seek wisdom, and ask God for strength as we navigate
            life&apos;s challenges.
          </p>
          <p>
            We also recognize the importance of practical support. Prayer and
            spiritual encouragement can complement, but should not replace,
            appropriate medical care, professional advice, or help from trusted
            people when these are needed. If you are in crisis or thinking of
            harming yourself, please contact a qualified professional or your
            local emergency services right away.
          </p>
        </section>

        {/* Scripture */}
        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-bold">Scripture We Use</h2>
          <p>
            Unless stated otherwise, Bible verses on this site are quoted from
            the King James Version (KJV), which is in the public domain. We
            try to explain verses in their context and avoid presenting them
            as guarantees of a particular outcome.
          </p>
        </section>

        {/* Who writes / AI */}
        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-bold">
            Who Writes This Site
          </h2>
          <p>
            Prayer.Odojema.com is created and edited by the Prayer.Odojema.com
            editorial team. Articles on this site are written with the help of
            AI tools, then reviewed and edited by a human editor before they
            are published.
          </p>
          <p>
            AI helps with drafting and organizing, but it does not replace
            human review. Prayers and Bible verses are checked for accuracy
            and tone. 
            
          </p>
        </section>

        {/* Commitment */}
        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-bold">
            Our Commitment to Readers
          </h2>
          <p>
            We aim to publish content that is thoughtful, relevant, respectful,
            and helpful to readers from different walks of life. As this
            website grows, we will continue developing prayer guides, scripture
            collections, and devotional resources that support meaningful
            reflection and encourage readers to explore the Bible for
            themselves.
          </p>
          <p>
            We welcome readers to use these resources during personal prayer,
            family devotionals, or quiet moments of reflection.
          </p>
        </section>

        {/* Prayer for you */}
        <section className="rounded-2xl border border-amber-100 bg-amber-50 p-8">
          <h2 className="font-serif text-3xl font-bold mb-4">
            A Prayer for You
          </h2>
          <p className="mb-4 italic">
            May you find peace when your heart is troubled, strength when the
            road is difficult, wisdom when you face important decisions, and
            hope when the future feels uncertain.
          </p>
          <p className="mb-4 italic">
            May your time here encourage you to draw closer to God, reflect on
            His Word, and remember that you do not have to find every answer
            all at once.
          </p>
          <p>
            Thank you for visiting Prayer.Odojema.com. May your journey of
            faith be filled with prayer, grace, and hope. Welcome, and may God
            bless you.
          </p>
        </section>

        <p className="text-center">
          <Link
            href="/prayers"
            className="inline-block rounded-full bg-amber-700 px-7 py-3 font-semibold text-white hover:bg-amber-800 transition"
          >
            Browse All Prayers
          </Link>
        </p>
      </div>
    </main>
  );
}