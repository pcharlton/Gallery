package backend;

import backend.model.Artwork;
import backend.repository.ArtworkRepository;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import java.util.ArrayList;

public class ApplicationStartupRunner implements CommandLineRunner {
    @Autowired
    private ArtworkRepository artworkRepository;

    protected final Log logger = LogFactory.getLog(getClass());
    @Override
    public void run(String... args) throws Exception {
        logger.info("PHC Application Started !!");

        SeedArtwork("The Bedroom", "https://www.artic.edu/iiif/2/6ad8f7d6-c8a9-5216-2664-09bd5691c6ed/full/843,/0/default.jpg", "Vincent van Gogh");
        SeedArtwork("The Fortune-Teller", "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436838/1763016/main-image", "Georges de La Tour");
        SeedArtwork("Time Transfixed", "https://www.artic.edu/iiif/2/57f6d8fb-b927-9f88-d23e-677cbb19cd85/full/843,/0/default.jpg", "René Magritte");
        SeedArtwork("The Dancing Class", "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436141/796064/main-image", "Edgar Degas");
        SeedArtwork("Jacques and Berthe Lipchitz", "https://www.artic.edu/iiif/2/fb012289-1512-170e-10d8-28ae4d520a1d/full/843,/0/default.jpg", "Amedeo Modigliani");
       /* SeedArtwork("", "", "");
        SeedArtwork("", "", "");
        SeedArtwork("", "", "");
        SeedArtwork("", "", "");
        SeedArtwork("", "", "");
        SeedArtwork("", "", "");
        SeedArtwork("", "", "");
        SeedArtwork("", "", "");
        SeedArtwork("", "", "");
        SeedArtwork("", "", "");
        SeedArtwork("", "", "");
        SeedArtwork("", "", "");
        SeedArtwork("", "", "");
        SeedArtwork("", "", "");
        SeedArtwork("", "", "");
*/
    }

    private void SeedArtwork(String title, String url, String notes) {
        Artwork artwork = new Artwork(title, url, notes);
        artworkRepository.save(artwork);
    }
}


