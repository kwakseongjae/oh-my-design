const DIMENSIONS = {
  "prod-01.jpg": { width: 1152, height: 864 },
  "prod-02.jpg": { width: 1024, height: 1024 },
  "prod-03.jpg": { width: 1152, height: 864 },
  "prod-04.jpg": { width: 1152, height: 864 },
  "prod-05.jpg": { width: 1024, height: 1024 },
  "prod-06.jpg": { width: 1024, height: 1024 },
  "prod-07.jpg": { width: 1024, height: 1024 },
  "prod-08.jpg": { width: 1024, height: 1024 },
  "prod-09.jpg": { width: 1024, height: 1024 },
  "prod-10.jpg": { width: 1024, height: 1024 },
  "prod-11.jpg": { width: 1024, height: 1024 },
  "prod-12.jpg": { width: 1024, height: 1024 },
  "prod-13.jpg": { width: 1024, height: 1024 },
  "prod-14.jpg": { width: 1024, height: 1024 },
  "prod-15.jpg": { width: 1024, height: 1024 },
  "prod-16.jpg": { width: 1024, height: 1024 },
  "prod-17.jpg": { width: 1024, height: 1024 },
  "prod-18.jpg": { width: 1024, height: 1024 },
  "prod-19.jpg": { width: 1024, height: 1024 },
  "prod-20.jpg": { width: 1024, height: 1024 },
  "prod-21.jpg": { width: 1024, height: 1024 },
  "prod-22.jpg": { width: 1024, height: 1024 },
  "prod-23.jpg": { width: 1024, height: 1024 },
  "prod-24.jpg": { width: 1024, height: 1024 },
  "post-1.jpg": { width: 1248, height: 832 },
  "post-2.jpg": { width: 1152, height: 864 },
  "post-3.jpg": { width: 1152, height: 864 },
  "post-4.jpg": { width: 1248, height: 832 },
  "post-5.jpg": { width: 1248, height: 832 },
  "post-6.jpg": { width: 1280, height: 720 },
};

export function assetSrc(relativePath) {
  const file = String(relativePath || "").replace(/^\/?assets\//, "");
  return `/assets/${file}`;
}

export function assetSize(relativePath) {
  const file = String(relativePath || "").replace(/^\/?assets\//, "");
  return DIMENSIONS[file] || { width: 1024, height: 1024 };
}
