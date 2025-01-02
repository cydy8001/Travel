# Use a base image with OpenJDK
FROM openjdk:22

# Set the working directory inside the container
WORKDIR /backend

# Copy the JAR file into the container (replace with your JAR name)
COPY target/travel-0.0.1-SNAPSHOT.jar /backend

# Expose the port that your Spring Boot app will run on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "travel-0.0.1-SNAPSHOT.jar"]
