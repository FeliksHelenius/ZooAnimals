import MainContainer from '../../components/containers/mainContainer';
import ImageContainer from '../../components/containers/imageContainer';

//styles
import { fontStyles } from '../../styles/styles';

//images
import birds from '../../assets/images/birds.jpg';
import mammals from '../../assets/images/mammals.jpg';
import reptiles from '../../assets/images/reptiles.jpg';

export default function Home() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100svh',
			}}>
			<MainContainer
				style={{
					backgroundColor: 'var(--brand-color)',
					textAlign: 'center',
					gap: '2rem',
				}}>
				<h1 className={fontStyles['header1']}>Welcome to Zoo Animals</h1>
				<p className={fontStyles['paragraph1']}>
					Explore the fascinating world of wildlife with our diverse collection
					of animals. Our site features three unique animal types, showcasing
					nine different species in total. Click on any animal to learn more
					about their habitats, behaviors, and fun facts. Whether you&apos;re
					passionate about mammals, reptiles, or birds, there&apos;s something
					here for everyone. Dive in and discover the wonders of nature at
					ZooAnimal.com!
				</p>

				<p className={fontStyles['subheader1']}>Get Started</p>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '1rem',
					}}>
					<ImageContainer imagePath={mammals}>
						<span className={fontStyles['links1']}>Mammals</span>
					</ImageContainer>
					<ImageContainer imagePath={reptiles}>
						<span className={fontStyles['links1']}>Reptiles</span>
					</ImageContainer>
					<ImageContainer imagePath={birds}>
						<span className={fontStyles['links1']}>Birds</span>
					</ImageContainer>
				</div>
			</MainContainer>
		</div>
	);
}
