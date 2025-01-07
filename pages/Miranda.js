const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Miranda Sorventi</h1>
  Miranda Sorventi was born in 1985 in a small village in Italy, coincidentally only a few kilometers from where Leonardo da Vinci was born. From an early age it was clear that Miranda possessed exceptional intelligence, as well as deep artistic gifts. Miranda taught herself to read before she could speak, and was late to begin speaking at all. When she did begin speaking at the age of four she spoke in complete, lengthy sentences of grammatical perfection, tinged with humor and deliberate ambiguity. It was also at the age of four that she completed her first drawing, an astonishing, highly detailed sepia of a fruit fly, which she labeled "<i>drosophila</i> deliberately in the style of Leonardo."
  <p>
  Miranda's parents, Arturo and Gabriella, were both artisans&mdash;he in pottery, and she in jewelery. Both were relatively uneducated, having barely graduated from high school, but Miranda grew up in an environment of creativity and fine esthetics.
  </p>
  <p>
  There was a small library in the village, and beginning at the age of five Miranda would visit the library daily, reading everything she could. There was a large dictionary of Italian in the library, which Miranda could frequently be seen studying with great intensity. Miranda's gifts of both memory and creative language soon began to emerge. The librarian playfully challenged Miranda to define words from random pages of the dictionary, and was shocked to find that Miranda could remember every definition she had read, and was close to finishing her readig of the entire dictionary.
  </p>
  <p>
  Soon Miranda began making jokes based on her own creative variations of advanced vocabulary. She would laugh heartily at her own jokes, but her parents did not understand her jokes, which really could only be understood by Miranda and experts in semantics and etymology. This all began as Miranda turned six years old.
  </p>
  `;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;