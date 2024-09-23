import { Link } from 'react-router-dom';
import { CountryCardDetails, CountryCardsContainer } from '.';
import Skeleton from 'react-loading-skeleton';
import Colors from '../../common/GlobalStyles/Colors';

export default function SkeletonCountryCard() {
  return (
    <CountryCardsContainer>
      {Array(8).fill(null).map((_, index) => (
        <Link to="/" key={index}>
          <article>
            <Skeleton height={160} baseColor={Colors.skeletonBaseColorImg}   />
            <CountryCardDetails>
              <h2><Skeleton /></h2>

              <div>
                {Array(3).fill(null).map((_, index) => (
                  <p key={index}><Skeleton /></p>
                ))}
              </div>
            </CountryCardDetails>
          </article>
        </Link>
      ))}
    </CountryCardsContainer>
  );
}
