package org.pitest.util;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.File;
import java.io.IOException;

import org.junit.Test;

public class ManifestUtilsTest {

  @Test
  public void shouldParseTheManifestsItCreates() throws IOException {
    File actual = ManifestUtils.createClasspathJarFile("some/path/foo.jar" + File.pathSeparator + "some/path/");
    assertThat(ManifestUtils.readClasspathManifest(actual))
    .containsExactly(
            new File("some/path/foo.jar").getAbsoluteFile(),
            new File("some/path/").getAbsoluteFile());
  }

}
