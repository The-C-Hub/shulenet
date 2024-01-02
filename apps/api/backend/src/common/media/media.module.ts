import { Module } from "@nestjs/common";
import { SupabaseModule } from "@common/supabase/supabase.module";
import { MediaRepository } from "@common/media/media.repository";
import { MediaService } from "@common/media/media.service";

@Module({
	imports: [
		SupabaseModule,
	],
	providers: [MediaRepository, MediaService],
	exports: [MediaService],
})
export class MediaModule {}