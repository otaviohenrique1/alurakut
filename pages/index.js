import styled from 'styled-components'
import { Box } from '../src/components/Box';
import { MainGrid } from '../src/components/MainGrid';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";

function ProfileSidebar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        alt={`${props.githubUser}`}
        style={{ borderRadius: '8px' }}
      />
    </Box>
  );
}

export default function Home() {
  const githubUser = 'otaviohenrique1';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ];

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
      <div
        className="profileArea"
        style={{ gridArea: 'profileArea' }}
      >
        <ProfileSidebar
          githubUser={githubUser}
        />
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
            Bem vindo(a)
          </h1>
          <OrkutNostalgicIconSet/>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da comunidade ({pessoasFavoritas.length})
          </h2>
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <Box>Comunidades</Box>
      </div>
    </MainGrid>
    </>
  );
}

/* Tempo video -> 01:07:39 */
