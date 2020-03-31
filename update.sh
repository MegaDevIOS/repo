rm Packages Packages.bz2
dpkg-scanpackages debs > Packages
cp Packages Packages-copy
bzip2 Packages-copy
mv Packages-copy.bz2 Packages.bz2
bzip2 -c Packages > Packages.bz2
gzip  -c Packages > Packages.gz