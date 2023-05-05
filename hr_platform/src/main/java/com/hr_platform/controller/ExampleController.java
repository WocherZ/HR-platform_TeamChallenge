package com.hr_platform.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExampleController {
    @GetMapping("/api/example")
    String exampleEndpoint() {
        return "This is example controller!";
    }
}
