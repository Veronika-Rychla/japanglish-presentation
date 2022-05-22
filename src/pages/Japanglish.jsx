import React from 'react';

export const Japanglish = () => {
  return (
    <section>
      <div className="canva bubble" id="canva">
        <h2>What is Japanglish?</h2>
        <p>
          Just as any other language, Japanese contains many words that were
          borrowed from foreign languages, especially English. As these words
          became assimilated into Japanese over time, their original
          pronunciation shifted so much that they are almost unrecognisable to
          native English speakers. There're several factors that contributed to
          this phenomenon.
        </p>
        <p>
          Firstly, Japanese is a syllabic language so Japanese people struggle
          with pronouncing consonant clusters. Japanese language also has a
          specific pronunciation of the letter L which is non-existent in
          Japanese phonemic alphabet so imported words with L end up being
          re-written with R and pronounced with soft R instead of the original
          L. Secondly, despite having English as a compulsory school subject,
          Japanese speakers tend to score lowly on international language tests
          because it's mainly taught only as grammar and not as a language of
          real communication.
        </p>
        <p>
          While it's considered cool to insert English words into one's
          utterance, their pronunciation always stays Japanese. That's because
          these borrowed words are being taught using the katakana alphabet
          that's tailored to Japanese language even though it's meant for
          re-writing foreign words. Thus, the original pronunciation is never
          learnt by young pupils.
        </p>
        <p>
          If you want to get acquainted with Japanglish in a fun way, watch
          episodes 7-9 (season 17) of South Park to get a very good gist. You
          can also watch a very accurate song parody if you click the big button
          below. Or even better—play our game!
        </p>
        <a href="https://www.youtube.com/watch?v=zhGnuWwpNxI" target="_blank">
          <button className="video big-button">Japanglish Video</button>
        </a>
      </div>
    </section>
  );
};
