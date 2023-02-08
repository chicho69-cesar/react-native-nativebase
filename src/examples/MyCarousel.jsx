// Importa las dependencias necesarias
import { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Icon, Text, Stack, Flex, IconButton } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

// Define el componente Carousel
export function MyCarousel() {
	// Define un estado para almacenar la posición actual del carrusel
	const [ currentIndex, setCurrentIndex ] = useState(0);

	// Define una matriz de imágenes para mostrar en el carrusel
	const images = [
		{
			uri: "./assets/img1.jpg",
			title: "Imagen 1",
		},
		{
			uri: "./assets/img2.jpg",
			title: "Imagen 2",
		},
		{
			uri: "./assets/img3.jpg",
			title: "Imagen 3",
		},
	];

	// Define una función para mostrar la siguiente imagen en el carrusel
	const nextImage = () => {
		setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
	};

	// Define una función para mostrar la imagen anterior en el carrusel
	const prevImage = () => {
		setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
	};

	return (
		<Flex alignItems='center'>
			<Stack style={styles.content}>
				<View style={styles.imageContainer}>
					<Image 
						resizeMode="cover"
						style={styles.image} 
						source={{ uri: images[currentIndex].uri }} 
					/>
					
					<Text style={styles.title}>{images[currentIndex].title}</Text>
				</View>

				<View style={styles.buttonsContainer}>
					<IconButton size='md' variant="solid" 
						onPress={prevImage}
						_icon={{
							as: MaterialIcons,
							name: "arrow-back"
						}} 
					/>

					<IconButton size='md' variant="solid" 
						onPress={nextImage}
						_icon={{
							as: MaterialIcons,
							name: "arrow-forward"
						}} 
					/>
				</View>
			</Stack>
		</Flex>
	);
}

// Define los estilos para el componente Carousel
const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: 200,
		height: 300,
	},
	title: {
		marginTop: 10,
		fontWeight: "bold",
	},
	buttonsContainer: {
		flexDirection: "row",
		marginTop: 20,
	},
});