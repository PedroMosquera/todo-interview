package com.dynatrace.hello;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Path("/hello")
public class HelloResource {

    @GET
    @Path("/{name}")
    public HelloDto getHello(@PathParam("name") String name) {
        return new HelloDto(String.format("Hello %s from the api", name));
    }

}