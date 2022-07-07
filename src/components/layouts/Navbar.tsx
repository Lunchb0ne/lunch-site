import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  Col,
  Container,
  Link,
  Row,
  Spacer,
  useBodyScroll,
} from '@nextui-org/react';
import { StyledNavContainer, StyledNavMainContainer } from './styles';

export interface Props {}

const Navbar: React.FC<Props> = ({}) => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const [, setBodyHidden] = useBodyScroll(null, { scrollLayer: true });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setScrollPosition(
      (typeof window !== 'undefined' && window.pageYOffset) || 0
    );
    window.addEventListener('scroll', onScroll.bind(this));
    return () => {
      window.removeEventListener('scroll', onScroll.bind(this));
    };
  }, []);

  const onScroll = () => {
    requestAnimationFrame(() => {
      setScrollPosition(window.pageYOffset);
    });
  };

  return (
    <StyledNavMainContainer id="navbar-container">
      <StyledNavContainer showBlur detached>
        <Container
          lg={true}
          as="nav"
          display="flex"
          wrap="nowrap"
          alignItems="center"
        >
          <Col
            className="navbar__logo-container"
            css={{
              '@mdMax': {
                width: '100%',
              },
            }}
          >
            <Row justify="flex-start" align="center">
              <NextLink href="/">
                <Link href="/">Logo</Link>
              </NextLink>
              <Spacer x={0.4} />
              Badge
            </Row>
          </Col>
          <Col
            className="navbar__resources-container"
            css={{ '@mdMax': { d: 'none' } }}
          >
            <Row justify="center" align="center">
              <Spacer x={1} y={0} />
              <NextLink href="/docs/guide/getting-started">Docs</NextLink>
              <Spacer x={1} y={0} />
              <NextLink href="/docs/components/avatar">Components</NextLink>
              <Spacer x={1} y={0} />
              <Link
                className="navbar__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/nextui-org/nextui/discussions/new?category=feedback"
                title="Leave your feedback"
                css={{
                  color: '$text',
                }}
              >
                Feedback
              </Link>
            </Row>
          </Col>
          <Col className="navbar__search-container">
            <Row
              className="navbar__search-row"
              justify="flex-end"
              align="center"
              css={{
                position: 'initial',
                '@mdMax': {
                  jc: 'center',
                },
              }}
            >
              <Row
                className="navbar__social-icons-container"
                justify="flex-end"
                align="center"
                gap={1}
                css={{
                  width: 'initial',
                  '@mdMax': {
                    d: 'none',
                  },
                }}
              >
                <Link
                  className="navbar__social-icon"
                  href="https://twitter.com/getnextui"
                  target="_blank"
                  rel="noreferrer"
                  css={{
                    m: '0 6px',
                    '& svg': {
                      transition: '$default',
                    },
                    '&:hover': {
                      '& svg': {
                        opacity: 0.7,
                      },
                    },
                  }}
                >
                  Twi
                </Link>
                <Link
                  className="navbar__social-icon"
                  href="https://discord.gg/9b6yyZKmH4"
                  target="_blank"
                  rel="noreferrer"
                  css={{
                    m: '0 6px',
                    '& svg': {
                      transition: '$default',
                    },
                    '&:hover': {
                      '& svg': {
                        opacity: 0.7,
                      },
                    },
                  }}
                >
                  Dsc
                </Link>
              </Row>
              <Spacer x={0.5} />
            </Row>
          </Col>
          <Col
            className="navbar__menu-container"
            css={{
              size: '100%',
              display: 'none',
              '@mdMax': {
                display: 'flex',
                justifyContent: 'flex-end',
              },
            }}
          ></Col>
        </Container>
      </StyledNavContainer>
    </StyledNavMainContainer>
  );
};

export default Navbar;
