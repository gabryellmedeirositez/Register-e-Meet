import React from 'react';

import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';

import {Container,ButtonView,TitleView, VideoView} from './Meet.styles';

const Meet: React.FC = () => {
    return(
        <Container>
            <Header title="Cadastro" />
            <TitleView>
                <Heading title="Conheça" type="h3"/>
            </TitleView>
            <VideoView />
            <ButtonView>
                <ButtonPrimary size="large" title="Continuar" />
            </ButtonView>
        </Container>
    );
}
export default Meet;