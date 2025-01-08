const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Miranda Sorventi</h1>
Miranda Sorventi was born in 1985 in a small village in Italy, coincidentally only a few kilometers from where Leonardo da Vinci was born. From an early age it was clear that Miranda possessed exceptional intelligence, as well as deep artistic gifts. Miranda taught herself to read before she could speak, and was late to begin speaking at all. When she did begin speaking at the age of four she spoke in complete, lengthy sentences of grammatical perfection, tinged with humor and deliberate ambiguity. It was also at the age of four that she completed her first drawing, an astonishing, highly detailed sepia of a fruit fly, which she labeled "<i>drosophila</i> deliberately in the style of Leonardo."
<p>Miranda's parents, Arturo and Gabriella, were both artisans&mdash;he in pottery, and she in jewelery. Both were relatively uneducated, having barely graduated from high school, but Miranda grew up in an environment of creativity and fine esthetics.</p>
<p>There was a small library in the village, and beginning at the age of five Miranda would visit the library every day it was open, reading everything she could. There was a large dictionary of Italian in the library, which Miranda could frequently be seen studying with great intensity. Miranda's gifts of both memory and creative language soon began to emerge. The librarian playfully challenged Miranda to define words from random pages of the dictionary, and was shocked to find that Miranda could remember every definition she had read, and was close to completing her reading of the entire dictionary.</p>
<p>Soon Miranda began making jokes based on her own creative variations of advanced vocabulary. She would laugh heartily at her own jokes, but her parents did not understand her jokes, which really could only be understood by Miranda and experts in semantics and etymology. This all began as Miranda turned six years old.</p>
<p>One year later Miranda's were in for a shock when she returned home one day speaking perfect, fluent English with no accent. "Come hai fatto?" ("How did you do this?") her father exclaimed. "I found some tapes in the library, some books and a dictionary, and studied hard for a couple of weeks." Miranda responded matter of factly. "It will take me another week or so to start telling my weird obscure language jokes in English." A week later, the obscure language jokes in English started, with Miranda laughing to herself because she was the only person who could understand them.</p>
<p>Word of Miranda's strange accomplishments began to spread, first in the village, then rapidly beyond. Soon Miranda was being referred to as "la ragazza miracolosa," "the miracle girl." She paid no attention to this, only continuing her treks to the library to study. Soon the villagers would pass her on the street and ask her "What are you studying now, Miranda?"</p>

  `;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;