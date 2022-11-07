import { Flex, Text } from "@chakra-ui/react"
import Head from 'next/head'

export default function Home() {
  const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }

  return(
    <>
    <div>
      <Head>
        <title>aayushcodes.eth</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/fav.jpg"/>
      </Head>
    </div>

    <div className="main">
      <Flex justifyContent={"center"} alignContent={"center"} height="100vh">
        <Flex justifyContent={"center"} alignContent={"center"} flexDirection={"column"}>
        <Text color={"white"}>
          Hey, I&apos;m <span className="exag" style={{color:"#D2FFD1", textDecoration:"underline"}}>Aayush</span> —  I <span className="exag" style={{color:"#FF72B9"}}>build, write and vibe.</span> 
        </Text>
        <Text color={"white"}>
          currently  → Intern <span className="exag" style={{color:"#D2FFD1"}}><a href="https://twitter.com/findsignalHQ" target={"blank"}>@FindSignal</a></span>
        </Text>
        <Flex backgroundColor={"#0C0C0C"} width={{base:"170px",md:"242px"}} rounded={"7px"} marginTop={"17px"} color={"white"} fontSize={{base:"12px",md:"16px"}}  justifyContent="center" p={"7px"}>
        <Text>
        <span style={{opacity:"78%"}}>want to chat? </span> <span className="exag2"> <a href="https://twitter.com/AayushCodes" target={"blank"}>find me here</a></span> 
        </Text>
        </Flex>
        </Flex>
      </Flex>
    </div>
    </>
  )
}
