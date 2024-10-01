import { Link } from 'react-router-dom';
import { CountryCardDetails, CountryCardsContainer } from '.';
import Skeleton from 'react-loading-skeleton';
import { useTheme } from 'styled-components';

export default function SkeletonCountryCard() {
  const theme = useTheme();

  return (
    <CountryCardsContainer>
      {Array(8).fill(null).map((_, index) => (
        <Link to="/" key={index}>
          <article>
            <Skeleton height={160} baseColor={theme.skeletonBaseColorImg}   />
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
