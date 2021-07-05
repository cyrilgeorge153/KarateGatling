package com.test;

import com.intuit.karate.junit5.Karate;

import org.junit.jupiter.api.Test;

public class TestRunner {
	 @Test
	    Karate testSample() {
	        return Karate.run("get").relativeTo(getClass());
	    }
}
