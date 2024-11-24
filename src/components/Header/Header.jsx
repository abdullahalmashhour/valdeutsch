import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>المعجم المختصر في اللغة الألمانية 
      </h1>
      <p>
        مقدمة كتاب “
        المعجم المختصر في اللغة الألمانية”

        الحمد لله الذي علَّم الإنسان ما لم يعلم، والصلاة والسلام على خير من علَّم وبلَّغ، سيدنا محمد وعلى آله وصحبه أجمعين.

        أما بعد،
        فإن اللغة هي مفتاح التواصل والمعرفة بين الشعوب، وأحد أهم وسائل التبادل الثقافي والحضاري. ومع تزايد الاهتمام باللغة الألمانية، سواء للدراسة أو العمل أو الاطلاع على ثقافة واحدة من أكثر الأمم إسهامًا في الفكر والعلوم، برزت الحاجة إلى إعداد هذا “المعجم المختصر في اللغة الألمانية”، ليكون عونًا للمبتدئين والمهتمين على حد سواء.

        يهدف هذا المعجم إلى تقديم المفردات الأساسية التي يحتاجها دارس اللغة الألمانية بأسلوب مبسط ومنظم، بحيث يغطي أهم الكلمات والتعبيرات التي تتكرر في الحياة اليومية والمواقف المختلفة. وقد حرصنا على أن يتميز هذا المعجم بما يلي:
        •	سهولة الاستخدام: عبر ترتيب الكلمات بشكل منطقي يسهل على القارئ الوصول إلى المطلوب بسرعة.
        •	الدقة والاختصار: حيث يُقدَّم شرح واضح لكل كلمة مع الأمثلة الضرورية.
        •	الشمولية: إذ يشمل أهم المفردات والتعبيرات التي تغطي مختلف المجالات.

        نأمل أن يكون هذا العمل لبنة تسهم في تمكين القارئ العربي من الإلمام بأساسيات اللغة الألمانية، وأن يلبي احتياجات الراغبين في التعمق في هذه اللغة الجميلة. نسأل الله أن يوفقنا في تقديم ما ينفع، وأن يجعل هذا الجهد خالصًا لوجهه الكريم.

        والله ولي التوفيق.


      </p>
    </header>
  );
}