package org.svis.generator.tests.city.dynamix

import static org.junit.Assert.*
import org.junit.Test
import org.junit.BeforeClass
import org.custommonkey.xmlunit.XMLUnit
import java.io.File
import java.io.FileNotFoundException
import org.eclipse.emf.mwe2.launch.runtime.Mwe2Launcher
import org.apache.commons.io.FileUtils
import org.svis.generator.tests.helper.JSONUtil
import org.svis.generator.city.CitySettings
import org.svis.generator.city.CitySettings.BuildingType

class Prawn_MethodInvocationTest {
	
		var static String json
	
	@BeforeClass
	def static void launch() {
		XMLUnit::ignoreWhitespace = true
		XMLUnit::ignoreComments = true
		CitySettings::BUILDING_TYPE = BuildingType.CITY_DYNAMIC
		new Mwe2Launcher().run(#["../org.svis.generator.run/src/org/svis/generator/run/city/Dynamix2City.mwe2", "-p", "inputPath=testdata/prawn/input/famixDyn",
			"dynamixPath=testdata/prawn/input/dynamix","outputPath=output/city/dynamix/prawn/method_invocation"])
		json = JSONUtil::read("./output/city/dynamix/prawn/method_invocation/metaData.json")
		CitySettings::BUILDING_TYPE = BuildingType.CITY_ORIGINAL
	}

	@Test
	def testMetaData() {
		var File file1 = null
		var File file2 = null
		try {
			file1 = new File("./output/city/dynamix/prawn/method_invocation/metaData.json")
			file2 = new File("./testdata/prawn/output/city/dynamix/prawn_method_invocation/metaData.json")
		} catch (FileNotFoundException e) {
			e.printStackTrace
	}
        
		assertEquals(FileUtils.checksumCRC32(file1), FileUtils.checksumCRC32(file2))
	}
	
	@Test
	def testCityX3DOM() {
		var File file1 = null
		var File file2 = null
		try {
			file1 = new File("./output/city/dynamix/prawn/method_invocation/model.html")
			file2 = new File("./testdata/prawn/output/city/dynamix/prawn_method_invocation/model.html")
		} catch (FileNotFoundException e) {
			e.printStackTrace
		}
        
		assertEquals(FileUtils.checksumCRC32(file1), FileUtils.checksumCRC32(file2))
    
	}
	
	@Test
	def testEventJS() {
		var File file1 = null
		var File file2 = null
		try {
			file1 = new File("./output/city/dynamix/prawn/method_invocation/events.js")
			file2 = new File("./testdata/prawn/output/city/dynamix/prawn_method_invocation/events.js")
		} catch (FileNotFoundException e) {
			e.printStackTrace
		}

		assertEquals(FileUtils.checksumCRC32(file1), FileUtils.checksumCRC32(file2))
	}
	
	
}