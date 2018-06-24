// Description:
// My first bot. Created by Jessica.

module.exports = function(robot) {

    let stretch = [
        'https://vacationandtripplanning.blogspot.com/2015/12/12-ways-to-stretch-at-your-desk.html',
        'https://www.ramfitness.com/store/p8/Office_Stretches.html',
        'http://www.getheidifit.com/blog/work-it-out-at-work-simple-exercises-stretches-for-the-office',
        'http://www.funnybits.mobi/2012/11/office-stretching-exercises.html'
    ];
    
    let joke = [
        'Did you hear about the semi-colon that broke the law? He was given two consecutive sentences.',
        'Never criticize someone until you\'ve walked a mile in their shoes. That way, when you criticize them, they won\'t be able to hear you from that far away. Plus, you\'ll have their shoes.',
        'So what if I don\'t know what "Armageddon" means? It\'s not the end of the world.',
        'Correct punctuation: the difference between a sentence that\'s well-written and a sentence that\'s, well, written.',
        'What\'s the difference between a good joke and a bad joke timing.',
        'Don\’t you hate it when someone answers their own questions? I do.',
        'I hate Russian dolls, they\'re so full of themselves.'
    ];

    let quote = [
        '\"The natural ups and downs of life can either generate personal growth or create personal fears. Which of these dominate is completely dependent on how we view change.\" (Michael Singer)',
        '\"The only thing that isn\’t worthless: to live this life out truthfully and rightly. And be patient with those who don\’t.\" (Marcus Aurelius)',
        '\"When you surround yourself with moments of solitude and stillness, you become intimately familiar with your environment in a way that forced stimulation doesn\’t allow. The world becomes richer, the layers start to peel back, and you see things for what they really are, in all their wholeness, in all their contradictions, and in all their unfamiliarity.\" (Zat Rana)',
        '\"All of humanity\’s problems stem from man\’s inability to sit quietly in a room alone.\" (Blaise Pascal)',
        '\"You wanna be on the water? How do you wanna be on the water? You wanna be on a yacht or you wanna be on a surfboard? I wanna be on a surfboard. I don\’t wanna deal with a yacht. That\’s a yacht. Some people want a yacht to say See my yacht.\" (Jerry Seinfeld)'
    ];
    let eyeCandy = [
        'http://typophile.tumblr.com/post/175174459871/jozefondrik-43-%C4%8Din-gag-gallery-poster',
        'http://thisisnthappiness.com/post/175173608584/journey-to-the-center-of-the-earth-justin-peters',
        'http://thisisnthappiness.com/post/175167401479/june-gloom-michael-wilson',
        'http://thisisnthappiness.com/post/175145660339/cristina-banban',
        'http://thisisnthappiness.com/post/175145635729/cumulus-sam-johnson',
        'http://thisisnthappiness.com/post/175135266319/somewhere-laurence-jones',
        'http://vaniladesign.tumblr.com/post/175126163364/from-febinraj-lighthouse-in-cape-neddick'
    ];

    robot.respond(/give me a break/i, function(res) {
        return res.reply("Pick one: stretch, joke, quote or eye candy");
      });
    
    robot.respond(/stretch/i, function(res) {
        return res.reply(res.random(stretch));
    });

    robot.respond(/joke/i, function(res) {
        return res.reply(res.random(joke));
    });

    robot.respond(/quote/i, function(res) {
        return res.reply(res.random(quote));
    });

    robot.respond(/eye candy/i, function(res) {
        return res.reply(res.random(eyeCandy));
    });
};