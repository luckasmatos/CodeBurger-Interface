import styled from 'styled-components'

export const Box = styled.article`
    margin: 0 30px;

    @media screen and (max-width: 1000px) {
        margin: 0 0;
    }
`

export const Container = styled.section`
    background-color: white;
    box-shadow: 0px 10px 40px 0px rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    width: max-content;
    height: max-content;
    padding: 25px 20px;

    .containerTop {
        display: grid;
        grid-gap: 10px 50px;
        grid-template-areas: 
        'tittle tittle'
        'items itemsPrice'
        'deliveryTax deliveryTaxPrice';

        .tittle {
            grid-area: tittle;
            margin-bottom: 20px;
            font-size: 16px;
            font-weight: bold;
        }

        .items {
            grid-area: items;
            font-size: 15px;
            font-weight: 400;
        }

        .itemsPrice {
            grid-area: itemsPrice;
            font-size: 15px;
            font-weight: 400;
        }

        .deliveryTax {
            grid-area: deliveryTax;
            font-size: 15px;
            font-weight: 400;
        }

        .deliveryTaxPrice {
            grid-area: deliveryTaxPrice;
            font-size: 15px;
            font-weight: 400;
        }
    }

    .containerBottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 30px;
        font-size: 20px;
        font-weight: bold;
    }


`