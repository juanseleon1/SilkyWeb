package com.proweb.Silky;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@ComponentScan("com.proweb.Silky")
@EntityScan("com.proweb.Silky")
@EnableJpaRepositories("com.proweb.Silky")
@EnableAutoConfiguration
@SpringBootApplication
public class SilkyApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(SilkyApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(SilkyApplication.class);
	}

}
