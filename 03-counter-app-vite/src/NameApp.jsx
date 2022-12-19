import PropTypes from 'prop-types'

const returnName = (flag, nomRebut, cognomRebut) => {
    const frase = (flag) ? `Sí, sóc en ${nomRebut+' '+cognomRebut}` : `No, no sóc en ${nomRebut+' '+cognomRebut}`
    return frase
}

const returnSubtitle = (flag) => (flag) ? 'Guapíssim' : 'Lletgíssim';

export const Name = ({nom, cognom, flag}) => {
    return (
        <>
            <h1 data-testid="h1test">{returnName(flag,nom,cognom)}</h1>
            <p>{returnSubtitle(flag)}</p>
        </>
    )
}

Name.propTypes = {
    nom: PropTypes.string.isRequired,
    flag: PropTypes.bool.isRequired,
    cognom: PropTypes.string
}

Name.defaultProps = {
    nom: 'No hi ha cap nom.',
    flag: false,
    cognom: '',
}
