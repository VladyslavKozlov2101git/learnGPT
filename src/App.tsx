import google from 'googlethis';
import Button from './components/Button';
import { useCards } from './store/cards';
import { fetchProps } from './store/cards.props';
import styles from './App.module.scss';
import Card from './components/CardComponent';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { A11y } from 'swiper';

function App() {
  const { fetchWords, response } = useCards((state) => state);

  const getWords = (body: fetchProps) => {
    fetchWords(body);
  };

  const data = response && JSON.parse(response);
  console.log(data);

  const test = [
    {
      value: 'algorithm',
      transcription: 'ˈælɡərɪðm',
      example: 'The algorithm for data compression is efficient.',
      example_ua: 'Алгоритм стиснення даних є ефективним.',
      meaning: 'a set of rules for solving a problem in a finite number of steps',
    },
    {
      value: 'encryption',
      transcription: 'ɪnˈkrɪpʃən',
      example: 'The encryption of sensitive data is necessary to protect it from hackers.',
      example_ua: 'Шифрування чутливої інформації необхідне для захисту її від хакерів.',
      meaning:
        'the process of converting information into a code to secure its confidentiality during communication or storage',
    },
    {
      value: 'network',
      transcription: 'ˈnɛtwɜːrk',
      example: "The company's computer network supports hundreds of employees.",
      example_ua: "Комп'ютерна мережа компанії підтримує сотні співробітників.",
      meaning: 'a group of devices interconnected for sharing resources and information',
    },
    {
      value: 'data',
      transcription: 'ˈdeɪtə',
      example: 'Big data analysis is a major trend in business today.',
      example_ua: 'Аналіз великих даних - мажорний тренд в бізнесі сьогодні.',
      meaning: 'information that is stored or transmitted in a computer or other digital device',
    },
    {
      value: 'software',
      transcription: 'ˈsɒftwɛə',
      example: 'The company specializes in developing business software.',
      example_ua: 'Компанія спеціалізується на розробці бізнес-програмного забезпечення.',
      meaning: "programs and instructions that control a computer's functioning",
    },
  ];

  return (
    <div className={styles['root']}>
      <Button onClick={() => getWords({ topic: 'IT', level: 'C1', quantity: 10 })}>
        GET 10 RANDOM WORDS ABOUT IT
      </Button>

      <div className={styles['slider']}>
        <Swiper loop modules={[A11y]} spaceBetween={8}>
          {data.length > 0 &&
            data.map((elem: any, idx: number) => {
              return (
                <SwiperSlide key={idx}>
                  <Card order={idx} {...elem} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
