import { useTheme } from 'next-themes';
import { Card } from '@/components/Dragger';
import { Button, Text } from '@/components/elements';
import { Box } from '@/components/layout';
import { getLayout } from '@/layouts/Layout';

function Index() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Box>
        <Text h1>Recent Work</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          corrupti delectus deserunt saepe facere praesentium laborum, animi
          quos, quas recusandae perferendis nisi eum accusantium mollitia id
          doloremque. Commodi, voluptas earum!
        </Text>
        {Array(8).map((_, idx) => (
          <Card key={idx} />
        ))}
        {/* <motion.div ref={constraints}>
          <motion.div drag dragConstraints={constraints}>
            <Image
              src={'/hero/nextjs.svg'}
              width={100}
              height={100}
              draggable="false"
              alt="Nextjs Logo"
            />
          </motion.div>
          <motion.div drag dragConstraints={constraints}>
            <Image
              src={'/hero/graphql.svg'}
              width={100}
              height={100}
              draggable="false"
              alt="Nextjs Logo"
            />
          </motion.div>
          <motion.div drag dragConstraints={constraints}>
            <Image
              src={'/hero/nuxtjs.svg'}
              width={100}
              height={100}
              draggable="false"
              alt="Nextjs Logo"
            />
          </motion.div>
          <motion.div drag dragConstraints={constraints}>
            <Image
              src={'/hero/react.svg'}
              width={100}
              height={100}
              draggable="false"
              alt="Nextjs Logo"
            />
          </motion.div>
          <motion.div drag dragConstraints={constraints}>
            <Image
              src={'/hero/vue.svg'}
              width={100}
              height={100}
              draggable="false"
              alt="Nextjs Logo"
            />
          </motion.div>
        </motion.div> */}
      </Box>
      <Button
        outline
        onClick={() => {
          // Add the transition before the switching happens, so we dont get a weird flash of transition at the start
          document.documentElement.style.transition =
            'background-color 0.5s ease-in-out';
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        Change Theme!
      </Button>
    </>
  );
}

Index.getLayout = getLayout;

export default Index;
