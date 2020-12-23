const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");

exports.handler = async (_event) => {
  const sns = new SNSClient(process.env.REGION)

  const publishCommand = new PublishCommand({
    Message: `${encouragingMessage()}\n\nSent with ❤️ from Dad`,
    TopicArn: process.env.SNS_TOPIC_ARN,
  });

  await sns.send(publishCommand);
}

function encouragingMessage() {
  const messages = [
    '“A woman is the full circle. Within her is the power to create, nurture and transform.” — Diane Mariechild',
    '“We can do no great things, only small things with great love.” — Mother Teresa',
    '“If you’re feeling helpless, help someone.” — Aung San Suu Kyi',
    '“One’s life has value so long as one attributes value to the life of others, by means of love, friendship, indignation and compassion.” — Simone De Beauvoir',
    '“People will forget what you said, people will forget what you did, but people will never forget how you made them feel.” — Maya Angelou',
    '“If we have no peace, it is because we have forgotten that we belong to each other.” — Mother Teresa',
    '“No one has ever become poor by giving.” — Anne Frank',
    '“People, even more than things, have to be restored, renewed, revived, reclaimed, and redeemed. Never throw out anyone.” — Audrey Hepburn',
    '“Life shrinks or expands in proportion with one’s courage.” — Anaïs Nin',
    '“It takes a great deal of courage to stand up to your enemies, but even more to stand up to your friends.” — J.K. Rowling',
    '“I have learned over the years that when one’s mind is made up, this diminishes fear; knowing what must be done does away with fear.” — Rosa Parks',
    '“When the whole world is silent, even one voice becomes powerful.” — Malala Yousafzai',
    '“Nobody cares if you can’t dance well. Just get up and dance. Great dancers are not great because of their technique, they are great because of their passion.” — Martha Graham',
    '“The most beautiful thing you can wear is confidence.” — Blake Lively',
    '“I may not be perfect, but parts of me are pretty awesome.” — Anonymous',
    '“Do you want to meet the love of your life? Look in the mirror.” — Byron Katie',
    '“No one can make you feel inferior without your consent.” — Eleanor Roosevelt',
    '“I think the best way to have confidence is not to allow everyone else’s insecurities to be your own.” — Jessie J',
    '“I’m stronger than I thought I was. My favorite phrase has been ‘This too shall pass.’ I now understand it really well.” — Robin Roberts',
    '“When there is no struggle, there is no strength.” — Oprah',
    '“Always be a first-rate version of yourself, instead of a second-rate version of somebody else.” — Judy Garland',
    '“The most effective way to do it, is to do it.” — Amelia Earhart',
    '“I know for sure that what we dwell on is what we become.” — Oprah Winfrey',
    '“If you’re not making mistakes, then you’re not making decisions.” — Catherine Cook',
    '“If you obey all the rules, you miss all the fun.” — Katharine Hepburn',
    '“You learn something out of everything, and you come to realize more than ever that we’re all here for a certain space of time, and, and then it’s going to be over, and you better make this count.” — Nancy Reagan',
    '“Keep your sunny side up, keep yourself beautiful, and indulge yourself.” — Betsey Johnson',
    '“I don’t think of all the misery but of the beauty that still remains.” — Anne Frank',
    '“If you don’t have any shadows you’re not in the light.” — Lady Gaga',
    '“When you notice that you’re having negative thoughts about how all of this is going to pan out, you need to remind yourself that you are not a very good fortune teller.” — Donna W. Hill',
    '“Optimism is the faith that leads to achievement.” — Helen Keller',
    '“Success is getting what you want, happiness is wanting what you get.” — Ingrid Bergman',
    '“I never dreamed about success. I worked for it.” — Estée Lauder',
    '“Doing the best at this moment puts you in the best place for the next moment.” — Oprah',
  ]
  return messages[Math.floor(Math.random() * messages.length)];

}